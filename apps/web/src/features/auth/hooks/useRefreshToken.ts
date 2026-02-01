import { authService } from "../services/authService";

export const useRefreshToken = () => {
  const refresh = async () => {
    return authService.refresh();
  };

  return refresh;
};4