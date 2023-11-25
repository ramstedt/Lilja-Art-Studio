import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(204, 204, 204, 0.831);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const Media = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  img {
    transition: transform 0.3s ease-in-out;
  }

  @media (min-width: 375px) {
    width: 170px;
    height: 170px;
  }

  @media (min-width: 425px) {
    width: 180px;
    height: 180px;
  }
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`;

const Post = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border-radius: 5%;
  &:hover ${Media} img {
    transform: scale(1.1);
  }
  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const Text = styled.div`
  color: #000;
  text-align: center;
`;

const InstagramPost = ({ imageUrl, caption, link }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleImageClick = () => {
    window.open(link, '_blank');
  };

  const Media = styled.div`
    width: 140px;
    height: 140px;
    img {
      transition: transform 0.3s ease-in-out;
    }

    @media (min-width: 375px) {
      width: 170px;
      height: 170px;
    }

    @media (min-width: 425px) {
      width: 180px;
      height: 180px;
    }
    @media (min-width: 768px) {
      width: 200px;
      height: 200px;
    }
    @media (min-width: 1024px) {
      width: 300px;
      height: 300px;
    }
  `;

  const Post = styled.div`
    position: relative;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    border-radius: 5%;
    -webkit-box-shadow: -5px 5px 10px -10px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: -5px 5px 10px -10px rgba(0, 0, 0, 0.61);
    box-shadow: -5px 5px 10px -10px rgba(0, 0, 0, 0.61);

    &:hover ${Media} img {
      transform: scale(1.1);
    }

    &:hover ${Overlay} {
      opacity: 1;
    }
  `;

  const Text = styled.div`
    color: #000;
    text-align: center;
  `;
  const shortCaption =
    caption.length > 80 ? caption.substr(0, 80 - 1) + '...' : caption;
  return (
    <Post
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleImageClick}
    >
      <Media>
        <Image
          src={imageUrl}
          fill
          sizes='(max-width: 300px)'
          style={{ objectFit: 'cover' }}
          alt={shortCaption}
        />
      </Media>
      <Overlay>
        <Text>{shortCaption}</Text>
      </Overlay>
    </Post>
  );
};

export default InstagramPost;
