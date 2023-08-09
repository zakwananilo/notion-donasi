type TransactionPaymentMethod = "VA" | "QRIS"

type TransactionPaymentStatus = "paid" | "pending"

type TransactionDonationStatus = "finish" | "pending"

interface Transaction {
  price: number;
  donation_status: TransactionDonationStatus;
  payment_status: TransactionPaymentStatus;
  payment_method: TransactionPaymentMethod;
  payment_note: string;
  virtual_account: number;
  qris: string;
  created_at: string;
  program: Program;
};