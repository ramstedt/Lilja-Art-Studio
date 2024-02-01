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
  }
  /* div:nth-child(odd) {
    background: ;
  } */
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
  return (
    <Layout>
      <h1>{schedule.title}</h1>
      <ScheduleWrapper>
        {schedule.jan === undefined ? null : (
          <Month>
            <h2>Januari</h2>
            <BlockContent blocks={schedule.jan} />
          </Month>
        )}
        {schedule.feb === undefined ? null : (
          <Month>
            <h2>Februari</h2>
            <BlockContent blocks={schedule.feb} />
          </Month>
        )}
        {schedule.mar === undefined ? null : (
          <Month>
            <h2>Mars</h2>
            <BlockContent blocks={schedule.mar} />
          </Month>
        )}
        {schedule.apr === undefined ? null : (
          <Month>
            <h2>April</h2>
            <BlockContent blocks={schedule.apr} />
          </Month>
        )}
        {schedule.jun === undefined ? null : (
          <Month>
            <h2>Juni</h2>
            <BlockContent blocks={schedule.jun} />
          </Month>
        )}
        {schedule.jul === undefined ? null : (
          <Month>
            <h2>Juli</h2>
            <BlockContent blocks={schedule.jul} />
          </Month>
        )}

        {schedule.jul === undefined ? null : (
          <Month>
            <h2>Augusti</h2>
            <BlockContent blocks={schedule.aug} />
          </Month>
        )}
        {schedule.sep === undefined ? null : (
          <Month>
            <h2>September</h2>
            <BlockContent blocks={schedule.sep} />
          </Month>
        )}
        {schedule.oct === undefined ? null : (
          <Month>
            <h2>Oktober</h2>
            <BlockContent blocks={schedule.oct} />
          </Month>
        )}
        {schedule.nov === undefined ? null : (
          <Month>
            <h2>November</h2>
            <BlockContent blocks={schedule.nov} />
          </Month>
        )}
        {schedule.dec === undefined ? null : (
          <Month>
            <h2>December</h2>
            <BlockContent blocks={schedule.dec} />
          </Month>
        )}
      </ScheduleWrapper>
    </Layout>
  );
}
