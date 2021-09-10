
import {LOAD_POST,ERROR_POST,GET_AUCTION_POST,GET_USERS_SUBCAT,GET_USERS_AUCTIONLIST,LOAD_POST_SUBCAT,ERROR_POST_SUBCAT,LOAD_POST_AUCTIONLIST,ERROR_POST_AUCTIONLIST} from '../Action/type'

const initialState = {
  
   auctioncatval: [],
   auctionsubcatval: [],
   auctionlistval: [],
    loading : true,
    error: false
    
};


export const AuctionReducer=(state = initialState, action)=>
{
  switch(action.type)
  {
      case LOAD_POST:
          return {
               ...state, 
               auctioncatval:[],
           
                error: false,
                 loading: true 
              }
          case GET_AUCTION_POST:
          return {
               ...state, 
               auctioncatval: action.payload,
                error: false,
                 loading: false
               }
                   case ERROR_POST:
                          return {
                                ...state,
                                auctioncatval:[],
                               
                                  error: true,
                                  loading: false
                                }

     default:
    return state

  }
}


export const AuctionSubcatReducer=(state = initialState, action)=>
{
  switch(action.type)
  {
      case LOAD_POST_AUCTIONLIST:
          return {
               ...state, 
              auctionsubcatval:[],
                error: false,
                 loading: true 
              }
        
              
               case GET_USERS_SUBCAT:
                return {
                     ...state, 
                     auctionsubcatval: action.payload,
                      error: false,
                       loading: false
                     }

                    

                  case ERROR_POST_SUBCAT:
                  return {
                        ...state,
                      
                        auctionsubcatval:[],
                          error: true,
                          loading: false
                        }

     default:
    return state

  }
}

export const AuctionListReducer=(state = initialState, action)=>
{
  switch(action.type)
  {
      case LOAD_POST_SUBCAT:
          return {
               ...state, 
               auctionlistval:action.payload,
                error: false,
                 loading: true 
              }
        
              
               case GET_USERS_AUCTIONLIST:
                return {
                     ...state, 
                     auctionlistval: action.payload,
                      error: false,
                       loading: false
                     }

                    

                  case ERROR_POST_AUCTIONLIST:
                  return {
                        ...state,
                      
                        auctionlistval:[],
                          error: true,
                          loading: false
                        }

     default:
    return state

  }
}