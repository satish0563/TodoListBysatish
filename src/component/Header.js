
import React from 'react'

import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

 export default function Header()
{


return(
<>
 
  <Navbar bg="danger" variant="dark">
    <Container bg="primary">
    <Navbar.Brand href="/">Redux Todo</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/AuctionCat.html">Auction</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/Addpost">  <Button variant="dark">Add Todo</Button></Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>

 
</>
)




}


