import { Link } from 'react-scroll';
import GitHub from '../images/icons/GitHub.png';
import Gmail from '../images/icons/Gmail.png';
import LinkedIn from '../images/icons/LinkedIn.png';
import Medium from '../images/icons/Medium.png';


export default function Footer() {
    return (
        <>
            <div><img src={GitHub} alt="GitHub"/></div>
            <div><img src={Gmail} alt="Gmail"/></div>
            <div><img src={LinkedIn} alt="LinkedIn"/></div>
            <div><img src={Medium} alt="Medium"/></div>
        </>
    )
}