export const storeUserData = (user: { id: number; username: string; token: string }) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserData = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const clearUserData = () => {
  localStorage.removeItem('user');
};
