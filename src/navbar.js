// src/components/Navbar.js

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour gérer l'ouverture/fermeture du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Mon Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="navbar-nav" className={isMenuOpen ? 'show' : ''}>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">À propos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/services">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

