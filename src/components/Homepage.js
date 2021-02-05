import React, { Component } from 'react';
import Nav from './Nav';
import About from './About';
import Blog from './blogs/BlogPage';
import Portfolio from './portfolio/PortfolioPage';
import Intro from './Intro';
import Contact from './Contact';
import Footer from './Footer';

class Homepage extends Component {
  state = {
    intro: false
  }
  componentDidMount(){
    window.addEventListener('scroll', () => {
      console.log("Scroll", window.scrollY)
      console.log("Height", window.innerHeight)
      if(window.scrollY >= window.innerHeight/1.5) {
        this.setState( {intro: true})
      }else{
        this.setState( {intro: false})
      }
    }) 
  }
  render(){
    return (
        <main>
          <Nav intro={this.state.intro}/>
          <div>
            <div className="intro" id="intro">
              <Intro />
            </div>      
          </div>
          <div id="about">
            <h1>About</h1>
            <div className="about">
              <span className="for-nav"></span>
              <About />
            </div>
          </div>
          <div id="portfolio">
            <h1>Projects</h1>
            <div className="portfolio">
              <span className="for-nav"></span>
              <Portfolio />
            </div>
          </div>
          <div id="blog"> 
            <h1>Blogs</h1>
            <div className="blog">
              <span className="for-nav"></span>
              <Blog />
            </div>
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </main>
    )
  }
}

export default Homepage;
