
import React, { useEffect,useState} from "react";
import {getsingleAuctionlist} from  '../Action/todoDataAction'
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

export default function  Readmore()
{
    const { id } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.todolistval);
    console.log("get id is===="+id)
    console.log("get single post===="+JSON.stringify(posts))
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    useEffect(() => {
      dispatch(getsingleAuctionlist(id));
  
      }, [])

      useEffect(() => {
        if (posts) {
          setTitle(posts.title);
          setBody(posts.body);
        }
      }, [posts]);

return(

  <div className="readmore"> 

  <img className="readmoreimage" src={`https://source.unsplash.com/collection/${id}/1600x900`} alt="ssssss"></img>

  <br></br>
<div className="readmoretitle">  {title}</div>
<div className="readmorebody">  {body}</div>

</div>

)



}