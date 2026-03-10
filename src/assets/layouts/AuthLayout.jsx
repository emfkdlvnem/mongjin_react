import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div data-layout="AuthLayout" className="h-full w-full">
      <Outlet />
    </div>
  );
};
