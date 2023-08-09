interface RegisterRequest extends ApiRequestRaw {
  type: "individu" | "perusahaan";
  name: string;
  email: string;
  password: string;
  phone: string;
  job: string;
}

interface RegisterVerifyOTPRequest extends ApiRequestRaw {
  email: string;
  phone: string;
  otp_code: string;
  reg_session_code: string;
}

interface RegisterResponseData {
  donatur_id: number;
  type: "individu" | "instansi";
  name: string;
  email: string;
  password: string;
  phone: string;
  job: string;
}

interface RegisterResponseData {
  reg_session_code: string;
  otp_expired_date: string;
  otp_counter: number;
}

interface RegisterResponse {
  data: RegisterResponseData[];
}

interface RegisterVerifyOTPResponse {
  data: RegisterResponseData[];
  session: string;
  refresh_session: string;
  trxseckey: string;
}