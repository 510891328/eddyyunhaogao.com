export default function Project(props) {
  console.log(props);
  return (
      <div>
        Project
        <img src={props.project.image} alt="source" width="400px"/>
      </div>
  )
}
