import { data } from '../data.js';

function About() {
  return (
    <>
      <div>
        <h3>{data.firstName}{data.lastName} ({data.nickName})</h3>
        <div>
          {data.programmingLanguage.primary.map( (pri, i) => <div key={i}>{pri}</div>)}
          {data.programmingLanguage.others.map( (oth, i) => <div key={i}>{oth}</div>)}
        </div>
      </div>
      <div>
        {data.about}
      </div>
    </>
  )
}

export default About;
