
import axios from "axios";

export const getdata=()=>
{
    return axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        return response.data;
    })
      .catch((err)=>{
           console.log("err value is "+err);

         });;
}

export const getsingleAuctionlistval=(id)=>
{
    return axios.get( `https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
        return response.data;
    })
      .catch((err)=>{
           console.log("err value is "+err);

         });;
}
export const updateAuctionlistval=(form_val)=>
{
    return axios.put(`https://jsonplaceholder.typicode.com/posts/${form_val.id}`,form_val).then(response => {
        return response.data;
    })
      .catch((err)=>{
           console.log("err value is "+err);

         });;
}

export const deleteAuctionlistval=(id)=>
{
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
        return response.data;
    })
      .catch((err)=>{
           console.log("err value is "+err);

         });;
}

export const createPostval=(val)=>
{
    return axios.post("https://jsonplaceholder.typicode.com/posts",val).then(response => {
        return response.data;
    })
      .catch((err)=>{
           console.log("err value is "+err);

         });;
}

