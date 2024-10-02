import Layout from "@/components/Layout/Layout";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import SanityBlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  div {
    flex-basis: 100%;
  }
  figure {
    display: flex;
    justify-content: center;
  }
  img {
    width: 100%;
    max-width: 300px;
  }
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Information() {
  const [information, setInformation] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(`*[_type == "information"]`)
      .then((data) => {
        setInformation(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (isLoading) return <div></div>;
  return (
    <>
      <h1>{information && information.title}</h1>
      <InformationWrapper>
        <SanityBlockContent
          blocks={information && information.foretatuering}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        />
        <SanityBlockContent
          blocks={information && information.skotselrad}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        />
      </InformationWrapper>
    </>
  );
}
