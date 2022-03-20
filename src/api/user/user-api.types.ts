export interface IUser {
  id: number;
  avatar: string;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  display_name: string;
  phone: string;
}

export interface PasswordRequest {
  password: string;
}

export interface UserSearchRequest {
  login: string;
}
