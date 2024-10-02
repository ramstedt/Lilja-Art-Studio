// src/pages/index.jsx
import Layout from "@/components/Layout/Layout";
import styled from "styled-components";
import Instagram from "@/components/Instagram/Instagram";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import ArtistCardSmall from "@/components/ArtistCardSmall/ArtistCardSmall";
import BlockContent from "@sanity/block-content-to-react";
import { Element } from "react-scroll";
import { useRouter } from "next/router";
const ArtistWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
`;

const PricesWrapper = styled.div`
  margin: auto;
  max-width: 768px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid black;
  font-size: 1.3rem;
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
  const [studioData, setStudioData] = useState(null);
  const [artists, setArtists] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const router = useRouter();
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    if (!loading && heroLoaded && router.asPath.includes("#priser")) {
      const section = document.getElementById("priser");
      if (section) {
        // Ensure the DOM is fully rendered before scrolling
        requestAnimationFrame(() => {
          section.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  }, [loading, heroLoaded, router.asPath]);

  useEffect(() => {
    setIsLoading(true);
    client
      .fetch(`*[_type == "home"]`)
      .then((pageData) => {
        setStudioData(pageData[0]);
        return client.fetch(`*[_type == "artists"]`);
      })
      .then((artistData) => {
        const sortedArtists = [...artistData].sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          return nameA.includes("karin")
            ? -1
            : nameB.includes("karin")
            ? 1
            : nameA.includes("gästartist")
            ? 1
            : nameB.includes("gästartist")
            ? -1
            : 0;
        });

        setArtists(sortedArtists);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Layout setHeroLoaded={setHeroLoaded}>
      <h1>{studioData && studioData.title}</h1>
      <div>
        <BlockContent blocks={studioData && studioData.body} />
      </div>
      <h2>Tatuerare</h2>
      <ArtistWrapper>
        {artists &&
          artists.map((artist, key) => {
            return (
              <ArtistCardSmall
                title={artist.name}
                text={artist.shortText}
                key={artist.slug.current + key}
                image={artist.portrait && urlFor(artist.portrait).url()}
                alt={artist.portrait.alt}
                slug={`/tatuerare/${artist.slug.current}`}
              />
            );
          })}
      </ArtistWrapper>
      <Element name="priser">
        <h2 id="priser">Priser</h2>
        <BlockContent blocks={studioData && studioData.pricesTextAbove} />
        {studioData && studioData.prices.rows.length > 0 ? (
          <PricesWrapper>
            {studioData.prices.rows.map((row) => (
              <div key={row._key}>
                <div>{row.cells[0]}</div>
                <div>{row.cells[1]}</div>
              </div>
            ))}
          </PricesWrapper>
        ) : null}
        <BlockContent blocks={studioData && studioData.pricesTextBelow} />
      </Element>
      <div>
        <h2>Det senaste från Instagram</h2>
        Kommer snart
        {/* <Instagram /> */}
      </div>
    </Layout>
  );
}
