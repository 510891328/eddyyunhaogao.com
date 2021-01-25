import { data } from '../data.js';
import '../styles/About.scss';

function About() {
  return (
    <>
      <div>
        <h3>{data.firstName}{data.lastName} ({data.nickName})</h3>
        <div>
          {data.programmingLanguage.primary.map( (pri, i) => <div key={i} className="language">{pri}</div>)}
          {data.programmingLanguage.others.map( (oth, i) => <div key={i} className="language">{oth}</div>)}
        </div>
      </div>
      <div className="about-p">
        {data.about}
      </div>
    </>
  )
}

export default About;
