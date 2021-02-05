import { data } from '../data.js';
import '../styles/About.scss';
import Flip from 'react-reveal/Flip';

function About() {
  return (
    <>
      <div>
        <h3>{data.firstName}{data.lastName} ({data.nickName})</h3>
        <Flip cascade top duration={2000}>
        <div>
          {data.programmingLanguage.primary.map( (pri, i) => <div key={i} className="language">{pri}</div>)}
          {data.programmingLanguage.others.map( (oth, i) => <div key={i} className="other language">{oth}</div>)}
        </div>
        </Flip>
      </div>
      <div>
        <p>{data.about}</p>
      </div>
    </>
  )
}

export default About;
