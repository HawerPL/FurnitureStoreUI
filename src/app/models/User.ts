export interface User {
  id?: number;
  login: string;
  token: string;
  email: string;
  name: string;
  surname: string;
  role?: string;
}
