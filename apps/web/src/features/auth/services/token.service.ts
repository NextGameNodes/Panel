import { useAuthStore } from "../store/auth.store";
import { AuthResponse } from "../types";

export const tokenService = {
  getAccess: () => useAuthStore.getState().accessToken,
  getRefresh: () => useAuthStore.getState().refreshToken,
  setTokens: (data: AuthResponse) => useAuthStore.getState().login(data),
  clear: () => useAuthStore.getState().logout(),
};