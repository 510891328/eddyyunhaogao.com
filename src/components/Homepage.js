import React, { Component } from 'react';
import Nav from './Nav';
import About from './About';
import Blog from './blogs/BlogPage';
import Portfolio from './portfolio/PortfolioPage';
import Intro from './Intro';

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
          <div className="intro" id="intro">
            <Intro />
          </div>           
          <div className="about" id="about">
            <span className="for-nav"></span>
            <About />
          </div>
          <div className="portfolio" id="portfolio">
            <span className="for-nav"></span>
            <Portfolio />
          </div>
          <div className="blog" id="blog">
            <span className="for-nav"></span>
            <Blog />
          </div>
        </main>
    )
  }
}

export default Homepage;
