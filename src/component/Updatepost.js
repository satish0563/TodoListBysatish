import { Form,Container,Card, Button} from "react-bootstrap"
import React, { useEffect,useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {getsingleAuctionlist}  from '../Action/todoDataAction'
import {updateAuctionlist}  from '../Action/todoDataAction'

 export default function Updatepost()
{

 let history = useHistory();

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.todoDataReducer.post);
    const { id } = useParams();
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    console.log("get id is===="+id)
    console.log("get single post===="+JSON.stringify(posts))
    useEffect(() => {
      dispatch(getsingleAuctionlist(id))
      
        
      }, [])

      useEffect(() => {
        if (posts) {
          setTitle(posts.title);
          setBody(posts.body);
        }
      }, [posts]);


      const submitForm = (e) => {
       
        e.preventDefault();
        const update_post = {
          id: posts.id,
          title: title,
          body: body,
        };
        dispatch(updateAuctionlist(update_post))
  
     
        history.push("/");
      };


  return(
    <Container  className='mt-5'>  
    <Card className="shadow  mb-5 bg-white rounded" style={{ width: '68rem' ,margin:'30px'}} >
    <Card.Header style={{padding: '1rem 1rem'}} >Add Post</Card.Header>
    <Card.Body>
    <Form  onSubmit={submitForm}>
  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
   
    <Form.Control  style={{fontSize: '1.5rem'}} type="text"  value={title}
                  onChange={(e) => setTitle(e.target.value)}  placeholder="Title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    
    <Form.Control style={{fontSize: '1.5rem'}} as="textarea" rows={4}  value={body}
                  onChange={(e) => setBody(e.target.value)} placeholder="Description" />
  </Form.Group>
  <Button onClick={submitForm} variant="danger">Submit</Button>
</Form>

    </Card.Body>
  </Card>
  </Container>

)  
}
