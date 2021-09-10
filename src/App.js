import React from 'react'

import Header from './component/Header'
import Home from './component/Home'
import Addpost from './component/Addpost'
import Updatepost from './component/Updatepost'
import Readmore from './component/Readmore'
import AuctionSubcat from '../src/component/Auction/AuctionSubcat'
import Auctionlist from '../src/component/Auction/Auctionlist'
import AuctionDetails from '../src/component/Auction/AuctionDetails'
import Placebid from '../src/component/Auction/Placebid'


import AuctionCat from '../src/component/Auction/AuctionCat'


import "../src/Style/App.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from '../src/Store/store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter

} from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
       <Router>
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
         <Route exact path="/" component={Home}></Route>
          <Route exact path="/Addpost" component={Addpost}></Route>
          <Route exact path="/Readmore/:id" component={Readmore}></Route>
          <Route exact path="/Updatepost/:id" component={Updatepost}></Route>
          <Route exact path="/AuctionSubcat.html" component={AuctionSubcat}></Route>
          <Route exact path="/Auctionlist.html" component={Auctionlist}></Route>
          <Route exact path="/AuctionDetails.html" component={AuctionDetails}></Route>
          <Route exact path="/Placebid.html" component={Placebid}></Route>
         <Route exact path="/AuctionCat.html" component={AuctionCat}></Route>
        </Switch>
        </BrowserRouter>
    </div>
    </Router>
    </Provider>

  );
}

export default App;
