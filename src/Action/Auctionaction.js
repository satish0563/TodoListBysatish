
import {getauctioncatdataval,getauctionlistdataval,getauctionsubcatdataval} from '../ApiCall/AuctionCommu'






import {GET_AUCTION_POST,ERROR_POST,LOAD_POST,GET_USERS_SUBCAT,GET_USERS_AUCTIONLIST} from './type'

 
export  const getauctioncatdata = () => (dispatch)=> {
     dispatch({type: LOAD_POST,payload: null})
    getauctioncatdataval().then(tododata => {
    dispatch({type: GET_AUCTION_POST,payload: tododata})
    }).catch(() => {
    dispatch({type: ERROR_POST,payload: null})
    }).finally(() => {})
    }

    export  const loadAuctionsubcat = (uid) => (dispatch)=> {

     dispatch({type: LOAD_POST,payload: null})
     getauctionsubcatdataval(uid).then(users => {
     dispatch({type: GET_USERS_SUBCAT,payload: users})
     }).catch(() => {
     dispatch({type: ERROR_POST,payload: null})
     }).finally(() => {})
     }

     export  const loadAuctionlist = (subid,catid) => (dispatch)=> {

          dispatch({type: LOAD_POST,payload: null})
          getauctionlistdataval(subid,catid).then(users => {
          dispatch({type: GET_USERS_AUCTIONLIST,payload: users})
          }).catch(() => {
          dispatch({type: ERROR_POST,payload: null})
          }).finally(() => {})
          }