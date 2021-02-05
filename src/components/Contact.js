import '../styles/Contact.scss';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

export default function Contact() {
    return(
    <>
        <Slide right cascade>
            <ul>
                <div><li></li></div>
                <div><li></li></div>
                <div><li></li></div>
            </ul>
        </Slide>
        <Bounce left cascade>
            <div className="contact-me">Contact Me</div>
        </Bounce>

        <Bounce left>
            <div className="contact-me-bg"><a href="mailto:eddyyunhaogao@gmail.com">Contact Me</a></div>
        </Bounce>
    </>
    )
}