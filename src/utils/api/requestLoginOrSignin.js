import backEndpoints from './backEndpoints';
import axios from 'axios';

const requestLoginOrSignin =  async (info, type) => {
  let token = '';
  return await axios.post(backEndpoints[type], { ...info })
  .then(res => {
    token = res.data.token;
    localStorage.setItem('token', token);

    return res.data
  }).catch((error) => {
    localStorage.setItem('token', token);
    console.log(error.message)
    return error
  });
};

export default requestLoginOrSignin;
