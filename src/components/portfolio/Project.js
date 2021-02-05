import '../../styles/Project.scss';

export default function Project(props) {
  return (
    <div className="project">
      <div className="gits">
        <div> <a href={props.project.github.frontEnd} rel="noreferrer" target="_blank">{'</>'}Front-End</a> </div>
        <div> <a href={props.project.github.backEnd} rel="noreferrer" target="_blank">{'</>'}Back-End</a> </div>
        {props.project.demo? <div> <a href={props.project.demo} rel="noreferrer" target="_blank">Video</a></div> : null}
        {props.project.site? <div> <a href={props.project.site} rel="noreferrer" target="_blank">Site</a></div> : null}
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
