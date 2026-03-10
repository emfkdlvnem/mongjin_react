import { Outlet } from "react-router-dom";
import { Header } from "@/common/components/Header";
import { Footer } from "@/common/components/Footer";

export const AppLayout = () => {
  return (
    <div data-layout="AppLayout" className="flex h-full w-full flex-col">
      <Header />
      <div className="flex w-full flex-1 flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
