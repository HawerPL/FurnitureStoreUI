export interface User {
  id?: number;
  login: string;
  password?: string;
  email: string;
  name: string;
  surname: string;
  role?: string;
}