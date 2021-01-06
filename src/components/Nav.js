import '../styles/Nav.css';
import GitHub from '../images/icons/GitHub.png';
import LinkedIn from '../images/icons/LinkedIn.png';
import Medium from '../images/icons/Medium.png';
import Gmail from '../images/icons/Gmail.png';

function Nav( {navController, current} ) {
  return (
    <nav>
      <ul className="left-nav">
        <li className={current === "intro" ? "current-page" : null } onClick={() => {navController('intro')}}>Home</li>
        <li className={current === "about" ? "current-page" : null } onClick={() => {navController('about')}}>About</li>
        <li className={current === "portfolio" ? "current-page" : null } onClick={() => {navController('portfolio')}}>Portfolio</li>
        <li className={current === "blog" ? "current-page" : null } onClick={() => {navController('blog')}}>Blog</li>
      </ul>
      <ul className="right-nav">
        <li><a href="https://github.com/510891328" rel="noreferrer" target="_blank" ><img src={GitHub} alt="GitHub" /></a></li>
        <li><a href="https://www.linkedin.com/in/eddy-yunhao-gao/" rel="noreferrer" target="_blank" ><img src={LinkedIn} alt="LinkedIn" /></a></li>
        <li><a href="https://as510891328.medium.com/" rel="noreferrer" target="_blank"><img src={Medium} alt="Medium" /></a></li>
        <li><a href="mailto:eddyyunhaogao@gmail.com"><img src={Gmail} alt="Gmail" /></a></li>
      </ul>
    </nav>
  )
}

export default Nav;
