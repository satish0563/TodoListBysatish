import { Form } from "react-bootstrap"
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap' 
import shortid from "shortid";
import { Button } from 'react-bootstrap'
import React, { useState } from "react";
import { createPost } from "../Action/todoDataAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
 export default function Addpost()
{

  let history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
      id: shortid.generate(),
      title: title,
      body: body,
    };

    dispatch(createPost(new_post));
    history.push("/");
  };

  

  return(
    <Container  className='mt-5'>  
    <Card className="shadow  mb-5 bg-white rounded" style={{ width: '68rem' ,margin:'30px'}} >
    <Card.Header style={{padding: '1rem 1rem'}} >Add Post</Card.Header>
    <Card.Body>
    <Form onSubmit={submitForm} >
  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
   
    <Form.Control  style={{fontSize: '1.5rem'}} type="text"  value={title}
                  onChange={(e) => setTitle(e.target.value)}  placeholder="Title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    
    <Form.Control style={{fontSize: '1.5rem'}} as="textarea"  value={body}
                  onChange={(e) => setBody(e.target.value)} rows={4}  placeholder="Description" />
  </Form.Group>
</Form>
<Button variant="danger" onClick={submitForm}>Submit</Button>
    </Card.Body>
  </Card>
  </Container>

)  
}
