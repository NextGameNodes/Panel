import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { useAuthInit } from "@/features/auth/hooks/useAuthInit";

type ProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const isAuthReady = useAuthInit();

  if (!isAuthReady) {
    return <div>Loading...</div>; // splash / spinner
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};