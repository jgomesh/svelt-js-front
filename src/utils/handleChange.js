const handleChange = (event, setInfo, info) => {
  setInfo({...info, [event.target.name]: event.target.value});
};

export default handleChange;
