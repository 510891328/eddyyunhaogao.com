import { Link } from 'react-scroll';
import '../styles/Nav.scss';

function Nav( {intro, navController, current} ) {
  return (
    <nav>
      <ul className={`larger-nav ${intro? "active" : null}`}>
        <li><Link activeClass="active" spy={true} to="intro" smooth={true} duration={700}>Home</Link></li>
        {/* <div className="scroll-line"></div> */}
        <li><Link activeClass="active" spy={true} to="about" smooth={true} duration={700} >About</Link></li>
        {/* <div className="scroll-line"></div> */}
        <li><Link activeClass="active" spy={true} to="portfolio" smooth={true} duration={700}>Portfolio</Link></li>
        {/* <div className="scroll-line"></div> */}
        <li><Link activeClass="active" spy={true} to="blog" smooth={true} duration={700}>Blog</Link></li>
      </ul>
      <ul className="small-nav">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  )
}

export default Nav;
