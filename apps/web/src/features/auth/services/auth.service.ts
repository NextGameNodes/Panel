import { api } from "./api";
import { AuthResponse, LoginPayload } from "../types";
import { tokenService } from "./token.service";

export const authService = {
  login: async (payload: LoginPayload) => {
    const { data } = await api.post<AuthResponse>("/auth/login", payload);
    tokenService.setTokens(data);
  },

  refresh: async () => {
    const refreshToken = tokenService.getRefresh();
    const { data } = await api.post<AuthResponse>(
      "/auth/refresh",
      { refreshToken }
    );
    tokenService.setTokens(data);
    return data;
  },

  logout: () => {
    tokenService.clear();
  },
};