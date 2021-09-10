import React, { useState} from "react";
import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import EllipsisText from "react-ellipsis-text";
import swal from 'sweetalert';

import Modal from "react-modal";
import loader from "../../assets/loader.gif"
import {useLocation} from "react-router-dom";
import { Form } from "react-bootstrap";
import { FormCheck } from "react-bootstrap";
import { CloseButton } from "react-bootstrap";
 export default function Placebid()
{

    var posts = useSelector((state) => state.auctionlist_value);
    console.log("auctioncatval===="+JSON.stringify(posts))
  
    const { listid} = useLocation(); 
    console.log("1212111"+listid);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenbid, setIsOpenbid] = useState(false);
    const [text_val, setText_val] = useState();
    console.log("id====="+listid);
    const handleChangetext= (event) => {
        console.log("event.target.`2`3`3`========"+event.target.value);
        
        setText_val(event.target.value);
      }
    function placeBidval(e) {
 
        if(text_val===null || text_val===undefined)
        {
            swal("Enter bid amount");

        }

     }

 const handleChange = (event) => {
    console.log("event.target.name========"+event.target.checked);
   setState({ ...state, [event.target.name]: event.target.checked });
 };
const [state, setState] = React.useState({
   checkedA: false,
  
 });

 function toggleModal(e) {
    setIsOpen(!isOpen);
 
   }

   function toggleModalBid(e) {
    setIsOpenbid(!isOpenbid);
 
   }

 if(posts.auctionlistval.length !==0)
 {
   posts= posts.auctionlistval.data.auctionList.filter((item)=>item._id===listid)

  console.log("11111111111"+JSON.stringify(posts))
   
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
        <EllipsisText text={postItem.description} length={"320"} />
      </div><br></br>
      <div className="aligncentre"> Current Bid: {postItem.currencySymbol}{postItem.currentBidAmount}</div><br></br>
     

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  
    <Form.Control type="text" onChange={handleChangetext}   placeholder="Enter The Bid Ammount" />
    </Form.Group>

      <Row>
   
     <div onClick={toggleModal}  className='textplacebid' > View Bid Increment</div><br>
     </br>
     
  <FormCheck  className="aligncentreval"
  id="switchEnabled"
  type="switch"
  checked={state.checkedA} onChange={handleChange} name="checkedA" 
  label="Place Automatic Bid"
/>
</Row>
{state.checkedA ? <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  
    <Form.Control type="text" placeholder="Enter The Max Bid Ammount" />
    </Form.Group> :''}    




     <div onClick={placeBidval} className="btn btn-danger m-5" >
       Place My Bid4567
    </div>
   

     
    </div>)}
  

</Row>
</Container>
}

return (    
  posts.loading ? showLoader() : renderData(posts)
)
}
