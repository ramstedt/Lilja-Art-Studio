import Layout from '@/components/Layout/Layout';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  @media screen and (min-width: 768px) {
    width: 90vw;
    background: ${(props) => props.theme.secondaryBackgroundColor.value};
  }
`;

const Month = styled.div`
  width: 100%;
  div div {
    margin-bottom: 1rem;
  }
  div div div {
    margin-bottom: 0.2rem;
  }
  @media screen and (min-width: 768px) {
    div {
      display: flex;
      gap: 1rem;
      width: fit-content;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    div div {
      display: flex;
      flex-direction: column;
      gap: 0;
      min-width: 150px;
    }

    div p:empty {
      display: none;
    }
  }
`;

const MonthHeader = styled.h2`
  padding-top: 1rem;
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
      const monthContent = schedule[month.short];
      //filter any months that have no content
      if (Array.isArray(monthContent) && monthContent.length === 1) {
        const firstObject = monthContent[0].children;
        if (firstObject.length <= 1) {
          return null;
        }
      }

      const contentStrings = Object.values(monthContent).reduce(
        (acc, entry, index, arr) => {
          let content = '';
          if (index === 0) {
            acc.push('<div>');
          }
          if (entry.children && entry.children[0].text === '') {
            content = '</div><div>';
          } else {
            content = `<div>${entry.children[0].text}</div>`;
          }
          acc.push(content);
          console.log(acc);
          return acc;
        },
        []
      );
      const combinedContent = contentStrings.join('');

      return (
        <Month key={month.short}>
          <MonthHeader>{month.full}</MonthHeader>

          <div
            dangerouslySetInnerHTML={{
              __html: `${combinedContent}`,
            }}
          />
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
