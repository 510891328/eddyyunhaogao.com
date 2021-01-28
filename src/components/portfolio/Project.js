export default function Project(props) {
  console.log(props.project);
  return (
    <div>
      <div className="gits">
        <div> {'</>'}Front-End </div>
        <div> {'</>'}Back-End </div>
        <div>Demo</div>
        <div>Site</div>
      </div>
      <div>
        <img src={props.project.image} alt="source"/>
      </div>
      <div className="dev-langs">
        {props.project.language.map(lan => <div>{lan}</div>)}
      </div>
    </div>
  )
}
