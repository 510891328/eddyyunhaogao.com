import '../styles/Intro.scss';
import { useEffect } from 'react';
function Intro() {
  
  useEffect(()=> {
    console.log(document.body.scrollHeight)
    console.log(window.innerHeight)
    console.log(window.scrollY)
  },[])

  return (
      <>
        <div className="intro-background"></div>
        <div>
          <h1>Hi, I am Eddy Gao</h1>
          <h1>A Software Developer</h1>
        </div>
      </>
  )
}

export default Intro;
