interface LoginRequest extends ApiRequestRaw {
  email: string;
  phone?: string;
}

interface LoginVerifyOTPRequest extends ApiRequestRaw {
  email: string;
  phone?: string;
  otp_code: string;
  reg_session_code: string;
}

interface LoginVerifyOTPResponseData {
  id: number;
  type: "individual" | "instansi";
  name: string;
  email: string;
  password: string;
  phone: string;
  job: string;
}

interface LoginResponseData {
  reg_session_code: string;
  otp_expired_date: string;
  otp_counter: number;
}

interface LoginResponse {
  data: LoginResponseData[]
}

interface LoginVerifyOTPResponse {
  data: LoginVerifyOTPResponseData[];
  session: string;
  refresh_session: string;
  trxseckey: string;
}