const verifyNameEmailAndPassword = (name, email, password, isDisabled) => {
  const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  const nameRegex = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
  const nameMinLength = /.{12,}/;
  const passwordMinLength = /.{6,}/;
  const emailFormat = emailRegex.test(email);
  const nameFormat = nameRegex.test(name);
  const nameFormatMinLength = nameMinLength.test(name);
  const passwordFormat = passwordMinLength.test(password);
  if (emailFormat && nameFormat && nameFormatMinLength && passwordFormat) {
    isDisabled(false);
  } else {
    isDisabled(true);
  }
};

export default verifyNameEmailAndPassword;
