interface LocalLoginRequest {
  email: string;
  captcha: string;
}

interface LocalLoginVerifyOTPRequest {
  otp_code: string;
}