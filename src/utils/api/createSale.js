import backEndpoints from './backEndpoints';
import axios from 'axios';

const createSale =  async (sale, type) => {
  const token = localStorage.getItem('token');

    if(!token.length) {
      return 'There is something wrong with your login';
    } else {
      return await axios.post(
          backEndpoints[type],
          { ...sale },
          { headers: { authorization: token}}
        ).then(res => {
          return res.data;
        }).catch((error) => {
          console.log(error.message);
          return error;
        }
    );
  }
};

export default createSale;
