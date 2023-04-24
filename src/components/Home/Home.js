import React, { useState } from 'react';
import './Home.css';
import logo from './../../img/logo.png';

function Home() {
  // fixed Header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);
  // Smooth scroll to section when clicking on navbar links
  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='home' id='Home'>
      <div className='home__bg'>
        <div className='header d__flex align__items__center pxy__30'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='navigation pxy__30'>
            <ul className='navbar d__flex'>
            <li className='nav__items mx__15'>
                <a href='#Home' onClick={handleNavClick}>
                  Home
                </a>
              </li>
              <li className='nav__items mx__15'>
                <a href='#About' onClick={handleNavClick}>
                  About
                </a>
              </li>
              <li className='nav__items mx__15'>
                <a href='#Services' onClick={handleNavClick}>
                  Services
                </a>
              </li>
              <li className='nav__items mx__15'>
                <a href='#Portfolio' onClick={handleNavClick}>
                  Portfolio
                </a>
              </li>
              <li className='nav__items mx__15'>
                <a href='#Blog' onClick={handleNavClick}>
                  Blog
                </a>
              </li>
              <li className='nav__items mx__15'>
                <a href='#Contact' onClick={handleNavClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className='toggle__menu'>
            <svg
              onClick={() => setShow(!show)}
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-justify white pointer'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </div>
          {show ? (
            <div className='sideNavbar'>
              <ul className='sidebar d__flex'>
              <li className='sideNavbar'>
                  <a href='#Home' onClick={handleNavClick}>
                    Home
                  </a>
                </li>
                <li className='sideNavbar'>
                  <a href='#About' onClick={handleNavClick}>
                    About
                  </a>
                </li>
                <li className='sideNavbar'>
                  <a href='#Services' onClick={handleNavClick}>
                    Services
                  </a>
                </li>
                <li className='sideNavbar'>
                  <a href='#Portfolio' onClick={handleNavClick}>
                    Portfolio
                  </a>
                </li>
                <li className='sideNavbar'>
                  <a href='#Blog' onClick={handleNavClick}>
                    Blog
                  </a>
                </li>
                <li className='sideNavbar'>
                  <a href='#Contact' onClick={handleNavClick}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className='container'>
          <div className='home__content'>
            <div className='home__meta'>
              <h1 className='home__text pz__10'>WELCOME TO MY WORLD</h1>
              <div className='wrapper-text'>
                <h2 className='home__text pz__10'>Hi, I’m Ky Phan.</h2>
              </div>
              <h3 className='home__text sweet pz__10'>JS Developer.</h3>
              <h4 className='home__text pz__10'>based in Viet Nam.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



