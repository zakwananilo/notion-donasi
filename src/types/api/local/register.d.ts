interface LocalRegisterRequest {
  type: "individu" | "perusahaan";
  name: string;
  email: string;
  phone: string;
  job: string;
}

interface LocalRegisterVerifyOTPRequest {
  otp_code: string;
}