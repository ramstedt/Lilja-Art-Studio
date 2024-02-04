import Layout from '@/components/Layout/Layout';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  @media screen and (min-width: 425px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 7rem;
    background: ${(props) => props.theme.secondaryBackgroundColor.value};
  }
`;

const Month = styled.div`
  min-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    min-height: 1rem;
  }
  @media screen and (min-width: 425px) {
    min-width: auto;
    align-items: normal;
  }
  h2 {
    align-self: left;
  }
`;

const Text = styled.div``;

export default function Schedule() {
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
        console.error('Error:', error);
      });
  }, []);

  if (isLoading) return <div></div>;

  const months = [
    { short: 'jan', full: 'Januari' },
    { short: 'feb', full: 'Februari' },
    { short: 'mar', full: 'Mars' },
    { short: 'apr', full: 'April' },
    { short: 'may', full: 'Maj' },
    { short: 'jun', full: 'Juni' },
    { short: 'jul', full: 'Juli' },
    { short: 'aug', full: 'Augusti' },
    { short: 'sep', full: 'September' },
    { short: 'oct', full: 'Oktober' },
    { short: 'nov', full: 'November' },
    { short: 'dec', full: 'December' },
  ];

  const renderMonth = (month) => {
    if (schedule[month.short] !== undefined) {
      return (
        <Month key={month.short}>
          <h2>{month.full}</h2>
          <BlockContent blocks={schedule[month.short]} />
        </Month>
      );
    }
    return null;
  };

  return (
    <Layout>
      <h1>{schedule.title}</h1>
      <Text>
        <BlockContent blocks={schedule.text} />
      </Text>
      <ScheduleWrapper>
        {months.map((month) => renderMonth(month))}
      </ScheduleWrapper>
    </Layout>
  );
}
