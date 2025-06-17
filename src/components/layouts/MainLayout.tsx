import { Outlet } from "react-router-dom"
import Header from "../common/Header"
import Footer from "../common/Footer"


const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <Header />
      <Outlet />
      <Footer />
      

    </div>
  )
}

export default MainLayout
