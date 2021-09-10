
import {getdata} from '../ApiCall/Communication'
import {getsingleAuctionlistval} from '../ApiCall/Communication'
import {updateAuctionlistval} from '../ApiCall/Communication'
import {deleteAuctionlistval} from '../ApiCall/Communication'
import {createPostval} from '../ApiCall/Communication'


import {GET_POST,LOAD_POST,ERROR_POST,UPDATE_POST,GET_SINGLE_POST,DELETE_POST,CREATE_POST} from './type'

 
export  const loadAuctionlist = () => (dispatch)=> {
   // dispatch({type: LOAD_POST,payload: null})
    getdata("GETPOST").then(tododata => {
    dispatch({type: GET_POST,payload: tododata})
    }).catch(() => {
    dispatch({type: ERROR_POST,payload: null})
    }).finally(() => {})
    }

    export   const getsingleAuctionlist= (id) =>(dispatch) => {
        dispatch({type: LOAD_POST,payload: null})
        getsingleAuctionlistval(id).then(tododata => {
        dispatch({type: GET_SINGLE_POST,payload: tododata})
        }).catch(() => {
        dispatch({type: ERROR_POST,payload: null})
        }).finally(() => {})
        }

        export   const updateAuctionlist = (val) => (dispatch)=> {
            dispatch({type: LOAD_POST,payload: null})
            updateAuctionlistval(val).then(tododata => {
            dispatch({type: UPDATE_POST,payload: tododata})
            }).catch(() => {
            dispatch({type: ERROR_POST,payload: null})
            }).finally(() => {})
            }
          export const deleteAuctionlist = (id) => (dispatch)=> {
               // dispatch({type: LOAD_POST,payload: null})
                deleteAuctionlistval(id).then(tododata => {
                dispatch({type: DELETE_POST,payload: id})
                }).catch(() => {
                dispatch({type: ERROR_POST,payload: null})
                }).finally(() => {})
          }
    

          export const createPost = (new_post) => (dispatch)=> {
            // dispatch({type: LOAD_POST,payload: null})
            createPostval(new_post).then(tododata => {
             dispatch({type: CREATE_POST,payload: tododata})
             }).catch(() => {
             dispatch({type: ERROR_POST,payload: null})
             }).finally(() => {})
       }
    

    