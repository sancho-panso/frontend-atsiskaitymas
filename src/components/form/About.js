import'./about.scss'

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class About extends Component{

    constructor(props) {
        super(props);
        this.state = {};
      }

      render() {
        return (
          <Container fluid>
            <h3> About</h3>
            <p>It was tough task, as ussually you do not disapoint me. Thank you teacher</p>
            <p>Michail Gimpelson 2020/12/02</p>
          </Container>
        );
      }
    }

 export default About;