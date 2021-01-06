import { data } from '../data.js';
import '../styles/About.css';
function About() {
  return (
    <div className="about-main">
      <div className="left">
        {data.about}
      </div>
      <div className="right">
        <h2>{data.firstName}{data.lastName} ({data.nickName})</h2>
        <div>
          {data.programmingLanguage.primary.map( pri => <div>{pri}</div>)}
          {data.programmingLanguage.others.map( oth => <div> {oth} </div>)}
        </div>
      </div>
    </div>
  )
}

export default About;
