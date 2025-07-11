import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1 px-10 py-4">
        <div className="mx-auto bg-white">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;