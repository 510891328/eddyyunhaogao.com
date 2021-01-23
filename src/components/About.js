import { data } from '../data.js';
import Nav from './Nav';

function About() {
  return (
    <>
      <div>
        <h2>{data.firstName}{data.lastName} ({data.nickName})</h2>
        <div>
          {data.programmingLanguage.primary.map( pri => <div>{pri}</div>)}
          {data.programmingLanguage.others.map( oth => <div> {oth} </div>)}
        </div>
      </div>
      <div>
        {data.about}
      </div>
    </>
  )
}

export default About;
