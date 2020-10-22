import React from 'react';
import './header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default class Header extends React.Component {

    render() {

        return (
            <Container>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://react-bootstrap.github.io/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Team 5
            </Navbar.Brand>
          </Navbar>
          </Container>
            
        )
    }
}