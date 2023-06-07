const validatePassword = (password) => {
  if(password && password.length > 7) {
    return true;
  } else {
    return false
  };
};

export default validatePassword;