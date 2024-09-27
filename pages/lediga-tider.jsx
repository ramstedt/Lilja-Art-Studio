import { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { client } from "@/sanity/lib/client";
import { getCalendarEvents } from "../lib/googleCalendar";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import Layout from "@/components/Layout/Layout";
import Modal from "react-modal";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 90vw;
  max-width: 1290px;

  @media screen and (max-width: 425px) {
    width: 100vw;
    margin-left: -2%;
    margin-right: -2%;
  }
`;

const StyledCalendar = styled(Calendar)`
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  //border-radius: 8px;
  margin-bottom: 2rem;
  width: 100%;
  font-family: "Source Sans 3";

  .react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__month-view__days__day {
    color: black;
    padding: 5px !important;
    &:hover {
      background: inherit;
    }
  }
  .react-calendar__month-view__days__day--weekend {
    color: red !important;
  }
  .react-calendar__navigation button {
    color: black;
    text-align: center;
    &:hover {
      background: inherit;
    }
  }

  .react-calendar__tile {
    max-height: none;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    position: relative;
    height: fit-content;
    background: none;
    min-height: 71px;
    color: black;
  }

  .emptyTile {
    pointer-events: none;
  }

  .react-calendar__tile--active {
    background: transparent !important;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: transparent !important;
  }
`;

const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
  width: 100%;
  height: 100%;
  &:hover {
    background: inherit !important;
  }
`;

const EventTitle = styled.div`
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;

  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

const EventTime = styled.div`
  font-size: 0.8rem;
  color: #555;
`;

const EventDetails = styled.div`
  margin-bottom: 5px;
  width: 100%;
  height: 100%;
  border: 1px solid darkgray;
  padding: 0 1px 0 1px;
  background-color: #f6efef !important;
`;

const Button = styled.button`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 1px solid black;
  max-width: fit-content;
  margin-top: 0.5rem;
  &:hover {
    background: white;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  z-index: 999;
  h4 {
    margin: 0 0 0.2rem 0;
    padding: 0;
  }
`;
const ScheduleWrapper = styled.div``;
const Text = styled.div``;

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
    padding: "20px",
  },
};
Modal.setAppElement("#__next");

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatDateWithOrdinal = (date) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleDateString("sv-SE", { month: "long" });
  const year = d.getFullYear();

  const ordinalSuffix = day === 1 ? "a" : "e";

  return `${day}:${ordinalSuffix} ${month} ${year}`;
};

const EventModal = ({ isOpen, onRequestClose, events = [] }) => {
  const eventDate =
    events.length > 0
      ? new Date(events[0].start.dateTime || events[0].start.date)
      : null;

  const formattedDate = eventDate
    ? `${eventDate.toLocaleDateString("sv-SE", {
        weekday: "long",
      })} ${formatDateWithOrdinal(eventDate)}`
    : "Inga händelser tillgängliga";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      contentLabel="Event information"
    >
      <ModalWrapper>
        <h4>
          {events.length > 0
            ? capitalizeFirstLetter(formattedDate)
            : "Inga händelser tillgängliga"}
        </h4>
        {events.length > 0 ? (
          <>
            {events.map((event) => (
              <div key={event.id}>
                <h3>{event.summary}</h3>
                <p>
                  {event.start.dateTime
                    ? `Tid: ${new Date(event.start.dateTime).toLocaleTimeString(
                        [],
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}`
                    : "Hela dagen"}{" "}
                </p>
                {event.description && <p>{event.description}</p>}
              </div>
            ))}
            <div>
              <small>
                Alla tider bokas via meddelande på{" "}
                <Link
                  href="https://www.instagram.com/liljaart_tattoo/"
                  target="_blank"
                >
                  Instagram <FiExternalLink />
                </Link>
              </small>
            </div>
          </>
        ) : (
          <p>Inga händelser för denna dag.</p>
        )}
        <Button onClick={onRequestClose}>Stäng</Button>
      </ModalWrapper>
    </Modal>
  );
};

export default function CalendarPage({ events }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dailyEvents, setDailyEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [schedule, setSchedule] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(`*[_type == "schedule"]`)
      .then((data) => {
        setSchedule(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    const eventsForDate = events.filter((event) => {
      const eventDate = new Date(event.start.dateTime || event.start.date);
      return eventDate.toDateString() === selectedDate.toDateString();
    });
    setDailyEvents(eventsForDate);
  }, [selectedDate, events]);

  const openModal = (eventsForDay) => {
    setDailyEvents(eventsForDay);
    setModalIsOpen(true);
  };

  const getEventContentForTile = (date) => {
    const eventsForDate = events.filter((event) => {
      const eventDate = new Date(event.start.dateTime || event.start.date);
      return eventDate.toDateString() === date.toDateString();
    });

    return (
      <EventContent>
        {eventsForDate.map((event) => (
          <EventDetails key={event.id} onClick={() => openModal(eventsForDate)}>
            <EventTitle>{event.summary}</EventTitle>
          </EventDetails>
        ))}
      </EventContent>
    );
  };
  if (isLoading) return <div></div>;
  return (
    <Layout>
      <h1>{schedule.title}</h1>
      <Text>
        <BlockContent blocks={schedule.text} />
      </Text>

      <Container>
        <StyledCalendar
          locale="sv-SE"
          value={selectedDate}
          onClickDay={(date) => setSelectedDate(date)}
          tileContent={({ date, view }) =>
            view === "month" ? getEventContentForTile(date) : null
          }
        />

        {modalIsOpen && (
          <EventModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            events={dailyEvents}
          />
        )}
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const events = await getCalendarEvents();
  return {
    props: {
      events,
    },
  };
}
