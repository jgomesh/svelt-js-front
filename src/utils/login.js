import requestLoginOrSignin from "./api/requestLoginOrSignin";

const login = async (event, setLoading, userInfo, setError, history) => {
  event.preventDefault();
  setLoading(true);
  const result = await requestLoginOrSignin(userInfo, 'login');
  
  const token = localStorage.getItem('token');
    if(result && (result.role ==='admin' || result.role ==='seller')) {
    setError(false);
    return history.push('/dashboard');
  }

  if(!token || !token.length) {
    setError(true);
  } else {
    setError(false);
    history.push('/home');
  }
  setLoading(false);
}

export default login;