import {combineReducers} from 'redux';

import todoDataReducer from './todoDataReducer';
import {AuctionListReducer,AuctionSubcatReducer,AuctionReducer }from './AuctionReducer';


const rootReducers = combineReducers({    
    todoDataReducer : todoDataReducer,
    auctioncat_value :AuctionReducer,
    auctionsubcat_value :AuctionSubcatReducer,
    auctionlist_value :AuctionListReducer,
   
});
export default rootReducers;