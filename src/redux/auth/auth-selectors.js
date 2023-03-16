export const isUserLogin = store => store.auth.isLogin;
export const getUser = store => store.auth.user;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
