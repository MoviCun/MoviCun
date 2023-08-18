import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Header.css';
import movicun from '../../assets/images/Header/logo-cancun.png';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false); // Nuevo estado para la clase active__dos

  const toggleButton = () => {
    setIsActive(!isActive);
    setIsNavActive(!isNavActive); // Cambiar el estado para la clase active__dos
  };

  return (
    <header className='hero'>
      <div className='hero__container'>
        <div className='container__logo'>
          <img className='logo__movicun' src={movicun} alt="" />
          <h3>Movicun</h3>
        </div>
        <nav className='nav__hero'>
          <ul className={`nav__itemas ${isNavActive ? 'active__dos' : ''}`}>
            <li className='nav__item'>
              <Link className='nav__link ' to="/avisos">Avisos</Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to="/paraderos">Paraderos</Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to="/ayuda">Ayuda</Link>
            </li>
          </ul>
        </nav>
        <div className={`toggle ${isActive ? 'activo' : ''}`}>
          <button className={`toggle__botton ${isActive ? 'activo' : ''}`} onClick={toggleButton}>
            <span className={`l1 span ${isActive ? 'activo' : ''}`}></span>
            <span className={`l2 span ${isActive ? 'activo' : ''}`}></span>
            <span className={`l3 span ${isActive ? 'activo' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
