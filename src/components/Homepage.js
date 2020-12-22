import React, { Component } from 'react';
import { Container, Box } from '@material-ui/core';

class Homepage extends Component {
  state = {
    current: 'intro',
    allPage: ['intro', 'about', 'portfolio', 'blog']
  }

  currentPage = () => {
    return this.state.current
  }

  render(){
    return (
      <div class="whole page">
        <Box my={2} mx={2}>
          {this.currentPage()}
        </Box>
      </div>
    )
  }
}

export default Homepage;
