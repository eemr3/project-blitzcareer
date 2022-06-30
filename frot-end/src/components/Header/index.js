import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <h1> Lista de tarefas - Ebytr</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
