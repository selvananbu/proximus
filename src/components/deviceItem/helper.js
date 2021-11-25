const axios = require('axios');


export const getQuoteOftheDay = async () => {
   let response = await axios({
        method: 'get',
        url: 'https://zenquotes.io/api/today',
      })
    
      if(response){
          return response;
      }
}