import '../../styles/Project.scss';

export default function Project(props) {
  console.log(props.project);
  return (
    <div className="project">
      <div className="gits">
        <div> <a href={props.project.github.frontEnd} rel="noreferrer" target="_blank">{'</>'}Front-End</a> </div>
        <div> <a href={props.project.github.frontEnd} rel="noreferrer" target="_blank">{'</>'}Back-End</a> </div>
        <div> <a href={props.project.github.frontEnd} rel="noreferrer" target="_blank">Video</a></div>
        <div> <a href={props.project.github.frontEnd} rel="noreferrer" target="_blank">Site</a></div>
      </div>
      <div className="project-image">
        <img src={props.project.image} alt="source"/>
      </div>
      <div className="dev-langs">
        {props.project.language.map(lan => <div>#{lan}</div>)}
      </div>
    </div>
  )
}
