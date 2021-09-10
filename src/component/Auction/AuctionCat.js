import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

import EllipsisText from "react-ellipsis-text";

import {getauctioncatdata} from '../../Action/Auctionaction'
import loader from "../../assets/loader.gif"
import {Link} from "react-router-dom";
 export default function AuctionCat()
{
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.auctioncat_value);
    console.log("auctioncatval===="+JSON.stringify(posts))

   
    useEffect(() => {
      dispatch(getauctioncatdata());
      }, [])

   
    


      const errorContainer = () => {
        return <div>ERROR IN API</div>;
      }

    const showLoader = () => {
        return <div className="loader"><img src={loader} alt="loading ..." title ="loading ..."/></div>;
      }

    const renderData = (usersInfo) => {
      return posts.error ? errorContainer():
  <Container >
<Row>
{usersInfo.map((postItem,item)=>
    <div  key={item} className="card custom-card col-lg-3 d-flex align-items-stretch mt-4 "  xs={6} md={3}  style={{ width: '18rem' }}>
     
     {/* <Link  to={`/AuctionSubcat/${postItem._id}.html`}> */}
     <Link to={{pathname: `/AuctionSubcat.html`, catid: `${postItem._id}`}} >
 
      <img variant="top" className="card-img-top"
        src={postItem.image} style={{height: "350px"}}
        alt={postItem.name}
     />
     </Link>
      

      <div className="card-auction">
        <h6 className="text-secondary">{postItem.title}</h6>
        <EllipsisText text={postItem.name} length={100} />
      </div>
     
    </div>)}
  

</Row>
</Container>
}

return (    
  posts.loading ? showLoader() : renderData(posts.auctioncatval.categoris)
)
}
