import backEndpoints from './backEndpoints';
import axios from 'axios';

const getSellerName =  async (type, seller_id) => {
  const token = localStorage.getItem('token');
    if(!token && !token.length) {
      return 'Please login';
    } else {
      return await axios.get(
          `${backEndpoints[type]}/${seller_id}`, 
          { headers: { authorization: token,}},
        ).then(res => {
          return res.data;
        }).catch((error) => {
          console.log(error.message);
          return error;
        }
    );
  }
};

export default getSellerName;
