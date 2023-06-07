import backEndpoints from './backEndpoints';
import axios from 'axios';

const updateStatus =  async (type, sale_id) => {
  const token = localStorage.getItem('token');
    if(!token && !token.length) {
      return 'Please login';
    } else {
      return await axios.put(
          `${backEndpoints[type]}/${sale_id}`, 
          { status: 'newStatus' },
          { headers: { authorization: token,}}
        ).then(res => {
          return res.data;
        }).catch((error) => {
          console.log(error.message);
          return error;
        }
    );
  }
};

export default updateStatus;
