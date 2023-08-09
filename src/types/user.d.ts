type UserType = "individual" | "institusi"

interface User {
  id: number;
  name: UserType;
  type: UserType;
  email: string;
  phone: string;
  job: string;
  photo: string;
}