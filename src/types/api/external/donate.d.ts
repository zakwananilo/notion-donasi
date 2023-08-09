interface DonateOrder {
  program_id: number;
  amount: number;
  note: string;
}

interface DonateRequest extends ApiRequestRaw {
  reference_number: string;
  bank_id: number;
  payment_method: "VA" | "QRIS";
  payment_note?: string;
  donation_note?: string;
  donate_orders: DonateOrder[];
}

interface DonateResponseData {
  id: number;
  donatur_id: number;
  reference_number: number;
  donation_total_payment: number;
  payment_method: "VA" | "QRIS";
  bank_id: number;
  bank_name?: string;
  payment_note: string;
  donation_note: string;
  payment_account: string;
  donation_date: string;
}

interface DonateResponse {
  data: DonateResponseData[];
}