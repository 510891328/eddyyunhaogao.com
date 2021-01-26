import GitHub from '../images/icons/GitHub.png';
import Gmail from '../images/icons/Gmail.png';
import LinkedIn from '../images/icons/LinkedIn.png';
import Medium from '../images/icons/Medium.png';


export default function Footer() {
    return (
        <>
            <div><a href="https://github.com/510891328" rel="noreferrer" target="_blank" ><img src={GitHub} alt="GitHub" /></a></div>
            <div><a href="https://www.linkedin.com/in/eddy-yunhao-gao/" rel="noreferrer" target="_blank" ><img src={LinkedIn} alt="LinkedIn" /></a></div>
            <div><a href="https://as510891328.medium.com/" rel="noreferrer" target="_blank"><img src={Medium} alt="Medium" /></a></div>
            <div><a href="mailto:eddyyunhaogao@gmail.com"><img src={Gmail} alt="Gmail" /></a></div>
        </>
    )
}