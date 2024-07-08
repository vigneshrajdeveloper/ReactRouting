import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter as Router , Route,Routes } from "react-router-dom";

import About from "./about";
import Dashboard from "./dashboard";
import App from "../App";

export default function Header(){

    return(

        <>
        <Router>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><b>Boeing</b></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dash">Dashboard</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' exact element={<App/>}></Route>
        <Route path='/about' exact element={<About/>}></Route>
        <Route path='/dash'  exact element={<Dashboard/>}></Route>
      </Routes>
      </Router>
        </>
    )
}