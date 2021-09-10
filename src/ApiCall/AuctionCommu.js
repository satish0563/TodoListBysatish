import axios from "axios";
import constant from '../../src/Constant/constant'
const headers = {
    'Content-Type': 'application/json; charset=utf-8'
    }
  
export const getauctioncatdataval=()=>
{
    let data={"method":"getPages","appId":"8c0ac5b9f41f","pageIdentifire":"auction_1601962208070_97","platformDevice":"android"}
    return  axios.post(constant().PAGE, data,{
      headers: headers
    }
   ).then(response => {
      return response.data;
  })
    .catch((err)=>{
         console.log("err value is "+err);

       });
}

export const getauctionsubcatdataval=(uid)=>
{
  let auctionsubcat={"method":"getSubCategoryAlongwithAuctionList","appId":"8c0ac5b9f41f","pageId":"auction_1601962208070_97","catId":uid,"subCatId":"","lang":"en","page":"1","searchText":"","latitude":"25.2117547","longitude":"83.8129922","appUserId":"6872386"}
    return  axios.post(constant().AUCTION_SUB_CAT, auctionsubcat,{
      headers: headers
    }
   ).then(response => {
      return response.data;
  })
    .catch((err)=>{
         console.log("err value is "+err);

       });
}


export const getauctionlistdataval=(subid,catid)=>
{
  let auctionlist={"method":"getSubCategoryAlongwithAuctionList","appId":"8c0ac5b9f41f","pageId":"auction_1601962208070_97","catId":catid,"subCatId":subid,"lang":"en","page":"1","searchText":"","latitude":"25.2117547","longitude":"83.8129922","sortAuctionBy":"1","appUserId":"6872386"}
    return  axios.post(constant().AUCTION_SUB_CAT, auctionlist,{
      headers: headers
    }
   ).then(response => {
      return response.data;
  })
    .catch((err)=>{
         console.log("err value is "+err);

       });
}