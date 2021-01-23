import GitHub from '../images/icons/GitHub.png';
import LinkedIn from '../images/icons/LinkedIn.png';
import Medium from '../images/icons/Medium.png';
import Gmail from '../images/icons/Gmail.png';
import { Link } from 'react-scroll';
import '../styles/Nav.scss';

function Nav( {navController, current} ) {
  return (
    <nav>
      <ul className="larger-nav">
        <li><Link activeClass="active" spy={true} to="intro" smooth={true} duration={700}>Home</Link></li>
        <div className="scroll-line"></div>
        <li><Link activeClass="active" spy={true} to="about" smooth={true} duration={700} >About</Link></li>
        <div className="scroll-line"></div>
        <li><Link activeClass="active" spy={true} to="portfolio" smooth={true} duration={700}>Portfolio</Link></li>
        <div className="scroll-line"></div>
        <li><Link activeClass="active" spy={true} to="blog" smooth={true} duration={700}>Blog</Link></li>
      </ul>
      {/* <ul className="right-nav">
        <li><a href="https://github.com/510891328" rel="noreferrer" target="_blank" ><img src={GitHub} alt="GitHub" /></a></li>
        <li><a href="https://www.linkedin.com/in/eddy-yunhao-gao/" rel="noreferrer" target="_blank" ><img src={LinkedIn} alt="LinkedIn" /></a></li>
        <li><a href="https://as510891328.medium.com/" rel="noreferrer" target="_blank"><img src={Medium} alt="Medium" /></a></li>
        <li><a href="mailto:eddyyunhaogao@gmail.com"><img src={Gmail} alt="Gmail" /></a></li>
      </ul> */}
      <ul className="small-nav">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  )
}

export default Nav;
