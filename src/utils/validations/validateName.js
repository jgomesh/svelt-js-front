const validateName = ( name ) => {
  if(name && name.length > 7) {
    return true;
  } else {
    return false;
  };
}

export default validateName;