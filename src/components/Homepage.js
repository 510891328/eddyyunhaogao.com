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
    current: 'intro',
    allPage: ['intro', 'about', 'portfolio', 'blog']
  }

  navController = (selection) => {
    this.setState({current: selection})
  }

  render(){
    return (
        <main>
          <Nav />
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
          <div id="footer">
            <Footer />
          </div>
        </main>
    )
  }
}

export default Homepage;
