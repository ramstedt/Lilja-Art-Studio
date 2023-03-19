import SkillCard from "../components/SkillCard";
import styled from "styled-components";

const SkillCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export default function Home() {
  return (
    <div>
      <main>
        <SkillCardWrapper>
          <SkillCard /> <SkillCard /> <SkillCard />
        </SkillCardWrapper>
      </main>
      <footer></footer>
    </div>
  );
}
