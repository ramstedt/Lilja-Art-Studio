import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import styled from 'styled-components';

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
              <Icon className='fas fa-times fa-xl' />
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
                  <Link href='/historia'>Vår Historia</Link>
                </li>
                <li>
                  <Link href='/samarbetspartners'>Samarbetspartners</Link>
                </li>
                <li>
                  <Link href='/gdpr'>Organisation/GDPR</Link>
                </li>
                <li>
                  <Link href='/kvalitetspolicy'>Miljö/Kvalitetspolicy</Link>
                </li>
                <li>
                  <Link href='/rutrot'>Rut och ROT</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/tjanster'>Tjänster</Link>
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
            <Icon className='fa-solid fa-bars-staggered fa-xl' />
          </label>
        </div>
      </nav>
    </>
  );
}

export default Nav;
