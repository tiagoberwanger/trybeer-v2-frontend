const verifyEmailAndPassword = (email, password, isDisabled) => {
  const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  const emailFormat = emailRegex.test(email);
  const passwordMinLength = /.{6,}/;
  const passwordFormat = passwordMinLength.test(password);
  if (emailFormat && passwordFormat) {
    isDisabled(false);
  } else {
    isDisabled(true);
  }
};

export default verifyEmailAndPassword;
