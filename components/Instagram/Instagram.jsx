import { useEffect, useState } from 'react';
import InstagramPost from '../_atoms/InstagramPost/InstagramPost';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  @media (min-width: 1024px) {
    gap: 5rem;
  }
`;

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://feeds.behold.so/zFgp2Jbbk23Ovf1ZUOhq/${params.id}`
  ); // replace with your API endpoint
  const post = await res.json();

  const { color } = await getPlaiceholder(post.imageUrl);
  const blurDataURL = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='${encodeURIComponent(
    color.hex
  )}' width='1' height='1'/%3E%3C/svg%3E`;

  return {
    props: {
      imageUrl: post.imageUrl,
      caption: post.caption,
      link: post.link,
      blurDataURL,
    },
  };
}

export default function Instagram() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://feeds.behold.so/zFgp2Jbbk23Ovf1ZUOhq';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        const mappedData = jsonData.map((item) => ({
          id: item.id,
          mediaUrl: item.mediaUrl,
          prunedCaption: item.prunedCaption,
          mediaType: item.mediaType,
          thumbnailUrl: item.thumbnailUrl,
          permalink: item.permalink,
        }));
        setData(mappedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <Wrapper>
      {data.map((item) => (
        <InstagramPost
          key={item.id}
          imageUrl={item.mediaUrl}
          link={item.permalink}
          caption={item.prunedCaption}
        />
      ))}
    </Wrapper>
  );
}
