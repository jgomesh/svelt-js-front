import requestLoginOrSignin from "./api/requestLoginOrSignin";

const signIn = async (event, setLoading, userInfo, setError, setRegistered, role) => {
  event.preventDefault();
  setLoading(true);
  const data = await requestLoginOrSignin(userInfo, role);
  if(!data.id) {
    setError(true);
    return setLoading(false);
  }
  setRegistered(true);
  setError(false);
  return setLoading(false);
}

export default signIn