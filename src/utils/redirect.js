const redirect = (event, history, route) => {
  event.preventDefault();
  history.push(route);
}

export default redirect;