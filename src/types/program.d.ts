interface Program {
  id: string;
  name: string;
  creator_name: string = 'Galang Perjuangan';
  image: string;
  description: string;
  total_user: number;
  total_paid_amount: number;
  donation_target: number;
  end_date: Date;
}