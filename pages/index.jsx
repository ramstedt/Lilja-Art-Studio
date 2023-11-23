import ArtistCard from '@/components/ArtistCardSmall/ArtistCardSmall';
import Layout from '@/components/Layout/Layout';
import styled from 'styled-components';
import placeholder from '@/public/images/placeholder.png';
import Image from 'next/image';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainText = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 60%;
  }
`;

const MainImage = styled.div`
  position: relative;
  width: auto;
  height: 300px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export default function Home() {
  return (
    <Layout>
      <h1>Tatuera är en konst</h1>
      <Main>
        <MainText>
          Välkomen till Studion Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Cumque amet officiis sed illo debitis magni quia
          vero tenetur veritatis ad, sit repellendus. Soluta voluptate rerum
          dolores maiores amet fuga officia dicta quidem a perferendis? Iure eos
          minus explicabo expedita maxime aspernatur quidem doloremque. Quasi
          eligendi tempora reprehenderit aliquam aspernatur necessitatibus
          veniam magnam sapiente aliquid dolores, repudiandae consectetur,
          molestiae consequuntur! Iusto doloremque quisquam ullam labore
          repellat minus.
        </MainText>
        <MainImage>
          <Image
            src={placeholder}
            alt='alt text'
            fill
            style={{ objectFit: 'contain' }}
            sizes='(max-width: 300px)'
          />
        </MainImage>
      </Main>
      <h2>Nyheter och aktuella erbjudanden</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        praesentium, illo fugit neque maxime, ipsa error vero quidem expedita,
        non accusantium. Eius molestias nihil architecto obcaecati modi officiis
        vero explicabo, animi ex ut facilis sed recusandae dolorem natus ad
        necessitatibus, cupiditate corporis, non eos quae enim? Sed eligendi
        officia explicabo, mollitia porro voluptatibus asperiores, nesciunt
        excepturi et deserunt nisi soluta provident sequi magni vitae nulla
        quasi. Unde soluta voluptate repellendus omnis ut vel fugit cum possimus
        nobis aut, mollitia error quidem aliquam recusandae. Excepturi maiores
        non, rerum, reprehenderit perferendis amet nam tenetur harum explicabo
        odit omnis quis! Architecto, laborum tempore, modi dolore eaque
        voluptates vero accusamus placeat possimus ex ut eum exercitationem
        aliquam labore distinctio. Quasi blanditiis odio cumque inventore alias
        porro. Quam a dolores sit placeat. Maiores, laborum aliquid nam rem
        atque doloribus expedita dolorem possimus, odit laboriosam suscipit eius
        amet, soluta cupiditate voluptatem fuga asperiores cumque. Consequuntur,
        iusto perferendis. Sunt, iste? Odio, aperiam fugit molestiae repudiandae
        nemo beatae provident dolor tempore ut consectetur iste fugiat et cum
        voluptatibus incidunt quis dignissimos est, autem, corrupti harum vero!
        Quibusdam praesentium, harum soluta velit architecto nulla tempore
        maxime totam vel deserunt aspernatur quas beatae ex, amet sed dolorum
        non eum inventore? Ratione at beatae inventore iste excepturi aut
        officiis optio enim quas, distinctio natus, quo iusto? Illo atque,
        dolorum labore rem in omnis excepturi, molestias necessitatibus ipsam
        nemo ex et sequi, odio ipsum libero officia unde tempora. Omnis ipsa
        minus id odio ab illo, reprehenderit, nobis, velit labore atque fugit
        quaerat quos. Quas repellendus, illum atque blanditiis sunt,
        consequuntur enim rem eligendi beatae maxime qui aperiam soluta eveniet
        porro ea quae aspernatur provident! Nulla, ullam quod. Quasi, itaque
        sunt repellat praesentium eum explicabo beatae sequi, error asperiores
        voluptatibus quos excepturi similique doloribus molestiae voluptatem
        quia perferendis odit ducimus repudiandae dolorem incidunt recusandae
        quas. Doloremque voluptatum, optio soluta necessitatibus cupiditate qui
        repellat accusamus sapiente, non modi voluptas nisi, minima incidunt
        quidem. Voluptate quae porro eligendi sit id! Aut quam aperiam porro
        obcaecati quia. Cumque reiciendis in, numquam minima laborum,
        voluptatibus officiis, repudiandae excepturi hic nulla blanditiis
        placeat! Dolor, excepturi reprehenderit sint itaque adipisci corrupti?
        Tempora dolor fugit, asperiores, animi velit delectus, explicabo itaque
        corporis voluptates qui non nam molestiae nesciunt reiciendis illo est
        ut blanditiis numquam unde rerum laboriosam consectetur architecto
        provident. Voluptatibus consectetur fugiat totam ad nam quisquam fugit
        consequuntur debitis expedita, tempore repellat quas optio sapiente, aut
        perferendis odio recusandae corporis eligendi non dolorem? Debitis,
        dignissimos similique. Dolores molestias eligendi ut, velit eius
        perferendis! Molestias quidem ad nihil vero, numquam magni. Unde saepe
        error nisi perferendis corporis omnis, doloribus modi officia vitae
        aperiam reiciendis aliquam magni quae fuga repellat quis nemo!
        Aspernatur animi dolorem assumenda, optio id tempora cupiditate quae in
        a hic, vel est quis, ex unde. Aspernatur, quam optio dolorum aliquam
        itaque veniam autem! Inventore eum vel veniam animi rerum, optio
        excepturi. Officiis magni ea quae accusantium obcaecati cumque
        recusandae laborum, alias quaerat modi tempore neque nobis, illum
        mollitia quis eveniet amet distinctio officia. Sit sint id explicabo!
      </div>
    </Layout>
  );
}
