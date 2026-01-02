
export const getAccessToken = () => localStorage.getItem("accessToken");


export const setAccessToken = (token) => {
  localStorage.setItem("accessToken", token);
};

export const clearAccessToken = () => {
  localStorage.removeItem("accessToken");
};

export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const setRefreshToken = (token) => {
  localStorage.setItem("refreshToken", token);
};

export const clearRefreshToken = () => {
  localStorage.removeItem("refreshToken");
};

export const clearTokens = () => {
  clearAccessToken();
  clearRefreshToken();
};

export const getUserInfo = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const setUserInfo = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const clearUserInfo = () => {
  localStorage.removeItem("user");
};


export const logout = () => {
  clearTokens();
  clearUserInfo();
};
