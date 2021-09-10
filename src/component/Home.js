
import React, { useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

import { ArrowRight } from 'react-bootstrap-icons';
import { Trash } from 'react-bootstrap-icons';
import { PencilFill } from "react-bootstrap-icons";
import EllipsisText from "react-ellipsis-text";
import {Link} from "react-router-dom";

import loader from "../assets/loader.gif";

import {loadAuctionlist} from '../Action/todoDataAction'
import {deleteAuctionlist} from '../Action/todoDataAction'

 export default function Home()
{


    const dispatch = useDispatch();
    const posts = useSelector((state) => state.todoDataReducer);
    console.log("posts===="+JSON.stringify(posts))
    useEffect(() => {
      
        dispatch(loadAuctionlist());
      }, [])

   
      const deletePost = (id) => {
        dispatch(deleteAuctionlist(id));
       
      };


      const errorContainer = () => {
        return <div>ERROR IN API</div>;
      }
    const showLoader = () => {
        return <div className="loader"><img src={loader} alt="loading ..." title ="loading ..."/></div>;
      }
    const renderData = (usersInfo) => {
      return usersInfo.error ? errorContainer():
  <Container >
<Row>
{usersInfo.map((postItem)=>
    <div  className="card custom-card col-lg-3 d-flex align-items-stretch mt-4 "  xs={6} md={3}  style={{ width: '18rem' }}>
      <img variant="top" className="card-img-top"
        src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
        alt={postItem.title}
        
      />
      <Link
        to={`/Updatepost/${postItem.id}`}
        className="btn btn-danger btn-edit"
      >
       <PencilFill color="royalblue"></PencilFill>
      </Link>

      <button  onClick={() => deletePost(postItem.id)} 
        className="btn btn-danger btn-delete">
       <Trash color="royalblue"></Trash>
      </button>

      <div className="card-body">
        <h6 className="text-secondary">{postItem.title}</h6>
        <EllipsisText text={postItem.body} length={"100"} />
      </div>
      <div className="card-footer">
        <Link to={`/Readmore/${postItem.id}`} className="btn btn-danger">
          <span className="mb-1"> read more</span>
          <ArrowRight />
        </Link>
      </div>
    </div>)}
  

</Row>
</Container>
}

return (    
  posts.loading ? showLoader() : renderData(posts.todolistval)
)
}

