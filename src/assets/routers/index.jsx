import { Routes, Route } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { Login } from "@/pages/login";
import { Home } from "@/pages/home";

export const MainRouter = () => {
  return (
    <Routes>
      {/* APP */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      {/* AUTH */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
