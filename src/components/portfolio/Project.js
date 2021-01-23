export default function Project(props) {
  console.log(props);
  return (
      <div>
        <img src={props.project.image} alt="source"/>
      </div>
  )
}
