import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import {Link} from "react-router-dom";
import EllipsisText from "react-ellipsis-text";
import { useParams } from "react-router-dom";
import {loadAuctionsubcat} from '../../Action/Auctionaction'
import Auctionlist from "./Auctionlist";
import loader from "../../assets/loader.gif"
import { ArrowRight } from 'react-bootstrap-icons';
import {
  BrowserRouter as Router,

  useLocation
} from "react-router-dom";

 export default function AuctionSubcat(props)
{
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.auctionsubcat_value);
    console.log("auctioncatval===="+JSON.stringify(posts))
    //const { id } = useParams();
    
    const { catid} = useLocation(); 
    console.log("1212111"+catid);
   

    useEffect(() => {
      dispatch(loadAuctionsubcat(catid));
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

{usersInfo.map((postItem,index)=>
    <div  key={index} className="card custom-card col-lg-3 d-flex align-items-stretch mt-4 "  xs={6} md={3}  style={{ width: '18rem' }}>
      {/* <Link to={`/Auctionlist/${postItem._id}/${catid}`}> */}
      <Link to={{pathname: `/Auctionlist.html` , subcatid: `${postItem._id}`,catid:`${catid}`}}> 
  
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
  posts.loading ? showLoader() : renderData(posts.auctionsubcatval.data.subCat)
)
}
