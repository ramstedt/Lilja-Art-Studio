// components/Button.js
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

const Button = styled.button`
  box-sizing: border-box;
  padding: 0.6rem;
  border-radius: 1px;
  letter-spacing: 0.2rem;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  :hover + span {
    opacity: 1;
  }
`;

const Arrow = styled.span`
  opacity: ${(props) => (props.$isHovered ? 1 : 0)};
  transition: opacity 0.5s, transform 0.5s;
  transform: translateX(${(props) => (props.$isHovered ? '5px' : '0px')});
  display: flex;
`;

export default function CTAButton({ text, url }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={url}>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
        <Arrow $isHovered={isHovered}>
          <FaArrowRight />
        </Arrow>
      </Button>
    </Link>
  );
}
