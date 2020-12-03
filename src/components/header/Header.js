import './header.scss';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';


class Header extends Component{ 

    constructor(props) {
        super(props);
        this.state = {};
      }

    render(){
        return(
                <Container fluid>
                    <h1>Domain Search Engine</h1>
                </Container>
        )
    }
 }

 export default Header;