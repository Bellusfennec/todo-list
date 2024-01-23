export interface ObjectData {
  [key: string]: any;
}

// Form
export interface HandlerChange {
  name: string;
  value: any;
  id?: string;
}

export type SizeComponent = "big" | "medium" | "small";
export type ColorComponent = "base" | "transparent" | "red";

// Auth
export interface LogIn {
  login: string;
  password: string;
}
export interface SignUp {
  firstName: string;
  login: string;
  password: string;
}
