// LogInAction
export const logInAction = (userData) => {
  return {
    type: 'SIGN_UP_IN',
    payload: userData,
  };
};

// logOutAction
export const logOutAction = () => {
  return {
    type: 'LOG_OUT',
  };
};
