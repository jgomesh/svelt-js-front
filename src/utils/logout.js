const logout = (history) => {
  localStorage.removeItem('token');
  localStorage.removeItem('cart');
  history.push('/');
}

export default logout;