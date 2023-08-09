interface RefreshSessionRequest extends ApiRequestRaw {
  donatur_id: number;
  refresh_session: string;
}

interface RefreshSessionResponse {
  session: string;
  exp_session: string;
  refresh_session: string;
  trxseckey: string;
}