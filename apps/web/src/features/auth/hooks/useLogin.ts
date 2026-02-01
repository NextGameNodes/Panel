import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";
import { LoginPayload } from "../types";

export function useLogin() {
  const navigate = useNavigate();

  const login = async (payload: LoginPayload) => {
    await authService.login(payload);
    navigate("/dashboard");
  };

  return { login };
}