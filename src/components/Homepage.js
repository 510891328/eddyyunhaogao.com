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

  currentPage = () => {
    switch (this.state.current) {
      case 'intro':
        return <Intro />
      case 'about':
        return <About />
      case 'portfolio':
        return <Portfolio />
      case 'blog':
        return <Blog />
      default:
        return <Intro />
    }
  }

  scrollHandler = (e) => {
    const scroll = e.nativeEvent.deltaY
    const currentIdx = this.state.allPage.findIndex(num => this.state.current === num)

    if(currentIdx < 3 && scroll > 0){
      this.setState({current: this.state.allPage[currentIdx + 1]})
    }

    if(currentIdx > 0 && scroll < 0){
      this.setState({current: this.state.allPage[currentIdx - 1]})
    }
  }

  navController = (selection) => {
    this.setState({current: selection})
  }

  render(){
    return (
        <main onWheel={this.scrollHandler} >
          <div  className="main-background">
            <div className="main-background-left"></div>
            <div className="main-background-right"></div>
          </div>
          <div className="main-page">
            <Nav navController={this.navController} current={this.state.current} key={this.state.current} />
            {this.currentPage()}
          </div>
        </main>
    )
  }
}

export default Homepage;
