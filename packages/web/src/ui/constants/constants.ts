export const loginConstants = {
  LOGIN_SUCCESS_MESSAGE: `Log in success`,
  INVALID_EMAIL_MESSAGE: `Please enter a valid email address`,
  WRONG_PASSWORD_FIRST_TIME_MESSAGE: `Sorry you’ve entered the wrong details\nPlease try again`,
  WRONG_PASSWORD_FIFTH_TIME_MESSAGE: `It appears you’re having trouble logging in\nYou may want to \nreset your password\n and try again.`,
};

export const forgotPasswordConstants = {
  EMAIL_MESSAGE_SENT_START: `Check your email\nWe have sent you an email to:\n`,
  EMAIL_MESSAGE_SENT_END: `\nwith instructions to reset your password\nSend again`,
  EMAIL_60MINUTE_MESSAGE: `Sorry we can't do that\nWe have reached the maximum amount of password reset, please try again in:\n60 minutes`,
};

export const verifyEmailConstants = {
  EMAIL_MESSAGE_TO_VALIDATE: `Check your email\nIt appears you haven't validated your email address. Please click on the link inside the email we just sent to:\n`,
  VERIFY_EMAIL_MESSAGE_START: `We just sent it again\nPlease click the link in the email sent to:\n`,
  VERIFY_EMAIL_MESSAGE_END: `\nwithin the next 20 minutes to activate your account.`,
};
