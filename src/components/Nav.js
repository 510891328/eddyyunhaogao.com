import { Link } from 'react-scroll';
import '../styles/Nav.scss';
import { useState } from 'react';

function Nav( {intro, navController, current} ) {
  const [click, setClick] = useState(false);
  const displayNav = () => {
    setClick(!click)
  }

  return (
    <nav>
      <ul className={`larger-nav ${intro? "active" : null} ${click? "clickNav" : null}`}>
        <li><Link activeClass="active" spy={true} to="intro" smooth={true} duration={700}>^ TOP</Link></li>
        <li><Link activeClass="active" spy={true} to="about" smooth={true} duration={700} >About</Link></li>
        <li><Link activeClass="active" spy={true} to="portfolio" smooth={true} duration={700}>Portfolio</Link></li>
        <li><Link activeClass="active" spy={true} to="blog" smooth={true} duration={700}>Blog</Link></li>
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
