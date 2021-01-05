import '../styles/Nav.css'

function Nav({navController, current}) {

  return (
    <nav>
      <ul>
        <li onClick={() => {navController('intro')}}>Home</li>
        <li onClick={() => {navController('about')}}>About</li>
        <li onClick={() => {navController('portfolio')}}>Portfolio</li>
        <li onClick={() => {navController('blog')}}>Blog</li>
      </ul>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ul>
    </nav>
  )
}

export default Nav;
