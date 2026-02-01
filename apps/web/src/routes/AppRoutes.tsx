import { Route, Routes, Navigate } from "react-router-dom";
import { AuthGuard } from "./Guards/AuthGuard";
import { GuestGuard } from "./Guards/GuestGuard";

// Pages
import { LoginPage } from "../features/auth/pages/LoginPage";
import { DashboardPage } from "@/pages/DashboardPage";
//import { HomePage } from "@/pages/HomePage";

export function AppRoutes() {
  return (
    <Routes>
      {/* Public route */}
      {/*<Route path="/" element={<HomePage />} />*/}

      {/* Login / guest */}
      <Route
        path="/login"
        element={
          <GuestGuard>
            <LoginPage />
          </GuestGuard>
        }
      />

      {/* Protected route */}
      <Route
        path="/"
        element={
          <AuthGuard>
            <DashboardPage />
          </AuthGuard>
        }
      />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}