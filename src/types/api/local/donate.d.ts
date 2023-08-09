interface LocalDonateRequest {
  program_id: number;
  amount: number;
  payment_method: TransactionPaymentMethod;
  bank_id: number;
  testimony: string;
}