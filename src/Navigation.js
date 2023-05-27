import React from 'react';
//import { Nav ,Container ,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/store'><li>Store</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
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