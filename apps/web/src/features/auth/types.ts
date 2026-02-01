export type User = {
  id: string;
  email: string;
  role: "admin" | "user";
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};