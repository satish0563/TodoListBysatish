import React, { useState} from "react";
import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { HeartFill } from "react-bootstrap-icons";
import EllipsisText from "react-ellipsis-text";
import { BarChartFill } from "react-bootstrap-icons";
import {Link,useLocation} from "react-router-dom";
import Modal from "react-modal";
import loader from "../../assets/loader.gif"
import { Col } from "react-bootstrap";
import { CloseButton } from "react-bootstrap";
 export default function AuctionDetails()
{

    var posts = useSelector((state) => state.auctionlist_value);
    console.log("auctioncatval===="+JSON.stringify(posts))
 
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenbid, setIsOpenbid] = useState(false);

    const { listid} = useLocation(); 
    


    console.log("id====="+listid);
 let price_val={
    // "price_icon":{

    // }
     

 }

 function toggleModal(e) {
    setIsOpen(!isOpen);
 
   }

   function toggleModalBid(e) {
    setIsOpenbid(!isOpenbid);
 
   }

 if(posts.auctionlistval.length !==0)
 {
   posts= posts.auctionlistval.data.auctionList.filter((item)=>item._id===listid)

   price_val["Base Price"]=posts[0].basePrice;
   price_val["Reserve Price"]=posts[0].reservePrice;
   price_val["End Date"]=posts[0].endDate+posts[0].endTime;
   
//    price_val.price_icon["BasePriceICon"]=Coin;
//    price_val.price_icon["ReservePrice"]=CashCoin;
//    price_val.price_icon["End Date"]=Calendar;



   if(posts[0].currentBidAmount!== "")
   {
    price_val["Current Bid"]=posts[0].currentBidAmount;
   }

   if(posts[0].totalBids!== "0")
   {
    price_val["Bid Count"]=posts[0].totalBids;
   }

  

  
   console.log("5555555555555555"+JSON.stringify(price_val))
   
}



   
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
    <div  key={item} className="card custom-card col-lg-3 d-flex align-items-stretch mt-4 "  xs={6} md={3}  style={{ width: '1120rem' }}>
      <img variant="top" className="card-img-top"
        src={postItem.media[0].path} style={{height: "350px"}}
        alt={postItem.name}
        
    />
     

     <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="aligncentre" onClick={toggleModal}>Increment Rules</div>
        <div className="buttonmodel" onClick={toggleModal}><CloseButton /> </div>
        <hr></hr>
       <p>Here's the Minimum amount your bid needs to be raised given the currnt bid on the item</p>
    
       <div className="headerincrement">
        <p className="alignleft">Currency price </p>
        <p className="alignright">Bid Increment</p>
         </div>
        <br></br>
        {postItem.incrementRules.map((itemval, index) => 
        
        <p className="alignleftmodle">
        ${itemval.from}---- ${itemval.to}  
          <span className="alignrightmodle">{itemval.increGap}</span>
          <hr></hr>
         </p>
)}

        
      </Modal>


      <Modal
        isOpen={isOpenbid}
        onRequestClose={toggleModalBid}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="aligncentre" onClick={toggleModalBid}>Bid Placed</div>
        <div className="buttonmodel" onClick={toggleModalBid}><CloseButton /> </div>
        
       <div className="headerincrement">
        <p className="alignleft">Name </p>
        <p className="alignright">Amount</p>
         </div>
        <br></br>
        {postItem.bidFromOthers.map((itemval, index) => 
        
        <p className="alignleftmodle">
       {itemval.appUserName}
         
          <span className="alignrightmodle"> ${itemval.bids[0].bidPrice}</span>
          <hr></hr>
         </p>
)}

        
      </Modal>





      

      <div className="card-auction">
        <h6 className="text-secondary">{postItem.title}</h6>
        <EllipsisText text={postItem.name} length={"100"} />
      </div>
      <div className="card-auction mt-1">
        <h6 className="text-secondary">{postItem.title}</h6>
        <EllipsisText text={postItem.description} length={"100"} />
      </div>
      
      <Row>
      { Object.entries(price_val).map(([key,value],i)=> <Col  className='mt-5' xs={6}><HeartFill style={{float:'left'}} color="royalblue"></HeartFill><div className='imagetitle float-right' >{key}: {value}</div></Col> ) }     
    <Col onClick={toggleModal} className='mt-5' xs={6}><BarChartFill style={{float:'left'}} color="royalblue"></BarChartFill><div className='imagetitle float-right' > View Bid Increment</div></Col>
    
    </Row>
    <Link to={{pathname: `/Placebid.html` , listid: `${postItem._id}`}}> 
    {/* <Link to={`/Placebid/${postItem._id}`}> */}
     <div  className="btn btn-danger mt-5" >
       Place My Bid
    </div>
   </Link>

     
    </div>)}
  

</Row>
</Container>
}

return (    
  posts.loading ? showLoader() : renderData(posts)
)
}
