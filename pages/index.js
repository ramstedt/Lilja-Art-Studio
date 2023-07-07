import SkillCard from "../components/SkillCard";
import styled from "styled-components";
import Oljemalningar from "../public/assets/images/oljemalningar.png";
import Tatueringar from "../public/assets/images/tatueringar.png";
import Illustrationer from "../public/assets/images/illustrationer.png";
import ProfilePhoto from "../public/assets/images/profilephoto.png";
import IntroCard from "../components/IntroCard";
import { createClient } from "next-sanity";

const SkillCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export default function Home() {
  return (
    <>
      <div>
        <IntroCard
          image={ProfilePhoto}
          alt=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna nulla, consectetur id sollicitudin eget, elementum vitae augue. Integer vitae tortor eros. Suspendisse potenti. Phasellus vitae ultrices ligula. Aliquam erat volutpat. Suspendisse ullamcorper eros quam, vitae volutpat nulla condimentum eget. Nullam porttitor augue maximus ipsum viverra faucibus. Mauris auctor augue nunc, eget gravida erat consectetur pretium. Sed elementum rhoncus magna eu tempor. Sed efficitur mollis ullamcorper. Vestibulum egestas varius pellentesque. Nunc tortor velit, maximus lobortis scelerisque ornare, commodo a arcu. Nunc blandit ipsum in sapien porttitor, vitae interdum nibh vestibulum. Vivamus aliquam, tellus a ornare feugiat, dui urna molestie augue, ut accum"
        />
      </div>
      <SkillCardWrapper>
        <SkillCard
          image={Oljemalningar}
          alt="oljemålningar"
          text="Oljemålningar"
        />
        <SkillCard image={Tatueringar} alt="oljemålningar" text="Tatueringar" />
        <SkillCard
          image={Illustrationer}
          alt="oljemålningar"
          text="Illustrationer"
        />
      </SkillCardWrapper>
    </>
  );
}

const client = createClient({
  projectId: "lqz08o01",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export async function getStaticProps() {
  const posts = [
    /* {

    } */
  ];

  return {
    props: {
      posts,
    },
  };
}
