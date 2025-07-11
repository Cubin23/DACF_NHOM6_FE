export interface IUser {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

export type UserRegister = Pick<IUser, "name" | "email" | "password">;

export type UserLogin = Pick<IUser, "email" | "password">;
