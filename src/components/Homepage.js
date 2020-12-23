import React, { Component } from 'react';
import { Container, Box } from '@material-ui/core';
import Nav from './Nav';

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
      <Container border={1}>
        <Box my={2} mx={2} border={1}>
          <Nav />
          {this.currentPage()}
        </Box>
      </Container>
    )
  }
}

export default Homepage;
