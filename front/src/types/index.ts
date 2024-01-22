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
export type ColorComponent = "primary" | "simple";

// Auth
export interface LogIn {
  login: string;
  password: string;
}
