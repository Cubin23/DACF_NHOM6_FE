import { Outlet } from "react-router-dom"
import AdminHeader from "../commonAdmin/Header"
import AdminSidebar from "../commonAdmin/Sidebar"
import AdminFooter from "../commonAdmin/Footer"


const AdminLayout = () => {
  return (
    <main className="flex">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex-1 min-h-screen bg-[#f6f9ff] pl-[240px] pt-[64px]">
        <div className="p-6">
          <Outlet />
        </div>
        <AdminFooter />
      </div>
    </main>
  )
}

export default AdminLayout