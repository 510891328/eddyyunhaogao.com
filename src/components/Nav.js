import { Link } from 'react-scroll';
import '../styles/Nav.scss';
import { useState } from 'react';

function Nav( {intro, navController, current} ) {
  const [click, setClick] = useState(false);
  const displayNav = () => {
    setClick(!click)
  }

  const hideNav = () => {
    setClick(false)
  }

  return (
    <nav>
      <ul className={`larger-nav ${intro? "active" : null} ${click? "clickNav" : null}`}>
        <li><Link activeClass="active" spy={true} to="intro" smooth={true} duration={700} onClick={hideNav}>^ TOP</Link></li>
        <li><Link activeClass="active" spy={true} to="about" smooth={true} duration={700} onClick={hideNav}>About</Link></li>
        <li><Link activeClass="active" spy={true} to="portfolio" smooth={true} duration={700} onClick={hideNav}>Portfolio</Link></li>
        <li><Link activeClass="active" spy={true} to="blog" smooth={true} duration={700} onClick={hideNav}>Blog</Link></li>
        <li><Link activeClass="active" spy={true} to="contact" smooth={true} duration={700} onClick={hideNav}>Contact</Link></li>
      </ul>
      <ul className={`${intro? null : "active" } small-nav`} onClick={displayNav}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  )
}

export default Nav;
