import React from 'react';
import { Nav ,Container ,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Navbar bg='secondary'>
      <Container>
      <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Store</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">About</Nav.Link>
      </Nav.Item>
      </Nav>
      </Container>
      </Navbar> */}
    </div>
  )
}

export default Navigation;