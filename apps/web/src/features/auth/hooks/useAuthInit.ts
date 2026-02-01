import { useEffect, useState } from "react";
import { authService } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";

export function useAuthInit() {
  const refreshToken = useAuthStore((s) => s.refreshToken);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (!refreshToken) {
        setIsReady(true);
        return;
      }

      try {
        await authService.refresh();
      } catch {
        // refresh nieudany → logout zrobi interceptor
      } finally {
        setIsReady(true);
      }
    };

    init();
  }, [refreshToken]);

  return isReady;
}