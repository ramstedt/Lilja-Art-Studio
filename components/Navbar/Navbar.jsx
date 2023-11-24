import Link from 'next/link';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { HiMenuAlt3 } from 'react-icons/hi';

const Icon = styled.i`
  color: ${(props) => props.theme.primary.fontColor.value};
`;
function Nav() {
  return (
    <>
      <nav>
        <div className='wrapper'>
          <div className='logo'></div>
          <input type='radio' name='slider' id='menu-btn' />
          <input type='radio' name='slider' id='close-btn' />
          <ul className='nav-links'>
            <label htmlFor='close-btn' className='btn close-btn'>
              <IoClose />
            </label>
            <li>
              <Link href='/'>Hem</Link>
            </li>
            <li>
              <Link href='/studio'>Studion</Link>
            </li>
            <li>
              <Link href='/tatuerare'>Våra tatuerare</Link>
            </li>
            <li>
              <Link href='/studio'>Lediga tider</Link>
            </li>
          </ul>
          <label htmlFor='menu-btn' className='btn menu-btn'>
            <HiMenuAlt3 />
          </label>
        </div>
      </nav>
    </>
  );
}

export default Nav;
