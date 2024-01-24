export interface ObjectData {
  [key: string]: any;
}

// Form
export interface HandlerChange {
  name: string;
  value: any;
  _id?: string;
}

export type SizeComponent = "big" | "medium" | "small";
export type ColorComponent = "base" | "transparent" | "red";

// Auth
export interface LogIn {
  email: string;
  password: string;
}
export interface SignUp {
  userName: string;
  firstName: string;
  email: string;
  password: string;
}

// AuthLocalStorage
export interface AuthData {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  userId: string;
}

// User

export interface UserUpdate {
  _id: number;
  userName: string;
  firstName: string;
  email: string;
  password: string;
}

// Todo
export interface TodoCreate {
  name: string;
}
export interface TodoUpdate extends TodoCreate {
  _id: number;
  done: boolean;
  index: number;
}
