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
              <label className='desktop-item'>
                Om Oss <i className='fa-solid fa-chevron-down fa-xs'></i>
              </label>
              <input type='checkbox' id='showDrop' />
              <label htmlFor='showDrop' className='mobile-item'>
                Om Oss <i className='fa-solid fa-chevron-down fa-2xs'></i>
              </label>
              <ul className='drop-menu'>
                <li>
                  <Link href='/historia'>Länk 1</Link>
                </li>
                <li>
                  <Link href='/samarbetspartners'>Länk 2</Link>
                </li>
                <li>
                  <Link href='/gdpr'>Länk 3</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/tatuerare'>Våra tatuerare</Link>
            </li>
            <li>
              <Link href='/galleri'>Galleri</Link>
            </li>
            <li>
              <Link href='/aktuellt'>Aktuellt</Link>
            </li>
            <li>
              <Link href='/lankar'>Länkar</Link>
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
