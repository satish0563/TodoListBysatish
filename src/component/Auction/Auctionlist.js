import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { HeartFill } from "react-bootstrap-icons";
import EllipsisText from "react-ellipsis-text";
import {loadAuctionlist} from '../../Action/Auctionaction'
import loader from "../../assets/loader.gif"
import {Link,useLocation} from "react-router-dom";

 export default function Auctionlist(props)
{
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.auctionlist_value);
    console.log("auctioncatval===="+JSON.stringify(posts))
    // const { subid } = useParams();
    // const { catid } = useParams();

    const { subcatid} = useLocation(); 
    const { catid} = useLocation(); 
    
 console.log("id====="+subcatid);
 console.log("subid====="+catid);
    useEffect(() => {
      dispatch(loadAuctionlist(subcatid,catid));
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
    <div key={item} className="card custom-card col-lg-3 d-flex align-items-stretch mt-4 "  xs={6} md={3}  style={{ width: '18rem' }}>
       
        {/* <Link to={`/AuctionDetails/${postItem._id}`}> */}
        <Link to={{pathname: `/AuctionDetails.html` , listid: `${postItem._id}`}}> 
      <img variant="top" className="card-img-top"
        src={postItem.media[0].path} style={{height: "350px"}}
        alt={postItem.name}
     />
     </Link>
      

      <div className="card-auction"  >
        <h6 className="text-secondary">{postItem.title}</h6>
        <EllipsisText text={postItem.name} length={100} />
      </div>

      <div className="card-title">
        <h6 className="text-secondary">Base price : {postItem.currencySymbol}{postItem.basePrice}</h6>
       
      </div>

      <div className="card-title">
      <HeartFill color="royalblue"></HeartFill>
      </div>
      
       
     
    </div>)}
  

</Row>
</Container>
}

return (    
  posts.loading ? showLoader() : renderData(posts.auctionlistval.data.auctionList)
)
}
