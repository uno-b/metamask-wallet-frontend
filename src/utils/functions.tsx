/* 
Validation functions 
*/
export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password: string) => {
  /*
      At least one uppercase letter
      At least one lowercase letter
      At least one digit
      At least one special symbol
      should be more than 6 characters
      */

  return (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    password.length > 6
  );
};

export const validateFileType = (type: string) => {
  if (type === 'jpg' || type === 'png' || type === 'mp4') {
    return true;
  } else {
    return false;
  }
};
