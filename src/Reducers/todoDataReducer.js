
import {GET_POST,LOAD_POST,ERROR_POST,GET_SINGLE_POST,UPDATE_POST,DELETE_POST,CREATE_POST} from '../Action/type'

const initialState = {
  
    todolistval: [],
    todolistsingleval: [],
    loading : true,
    error: false,
    post:null
};

 function todoDataReducer(state = initialState, action)
{

    switch(action.type)
    {
        case LOAD_POST:
            return {
                 ...state, 
                 todolistval:action.payload,
                  error: false,
                   loading: true 
                }
            case GET_POST:
            return {
                 ...state, 
                 todolistval: action.payload,
                  error: false,
                   loading: false
                 }
                 case GET_SINGLE_POST:
                    return {
                         ...state, 
                         post: action.payload,
                          error: false,
                           loading: false
                         }

                         case UPDATE_POST:
                          return {
                               ...state, 
                               todolistval: state.todolistval.map((postItem) =>
          postItem.id === action.payload.id ? action.payload : postItem
        ),
                                error: false,
                                 loading: false
                               }


                               case DELETE_POST:
                                return {
                                  ...state,
                                  todolistval: state.todolistval.filter((postItem) => postItem.id !== action.payload),
                                };

                                case CREATE_POST:
                                  return {
                                    ...state,
                                
                                    todolistval: [action.payload, ...state.todolistval],
                                  
                                  };
  

            case ERROR_POST:
            return {
                 ...state,
                 todolistval:[],
                   error: true,
                    loading: false
                 }

       default:
      return state

    }


}

export default todoDataReducer;