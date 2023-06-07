  import backEndpoints from './backEndpoints';
  import axios from 'axios';

  const addImage = async (formData) => {
    const token = localStorage.getItem('token');

    if (!formData || !token) {
      return 'There is something wrong with your login';
    }

    const config = {
      headers: {
        'Content-Type': `multipart/form-data;`
      },
    };

    try {
      const response = await axios.post(
        backEndpoints['add_image'],
        formData,
        config,
      );

      return response.data;
    } catch (error) {
      console.log(error.message);
      return 'Error adding image' + error.message;
    }
  };

  export default addImage;