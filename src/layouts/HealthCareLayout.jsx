import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { LayoutDashboard } from "lucide-react";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RiMentalHealthLine } from "react-icons/ri";

export default function HealthCareLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken") || !localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate, location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  const data = {
    user: {
      username: JSON.parse(localStorage.getItem("user"))?.username,
      email: JSON.parse(localStorage.getItem("user"))?.email,
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      onClick: handleLogout,
    },
    teams: [
      {
        name: "Jalinan",
        logo: <img src="/logo.png" alt="logo" className="w-[25px]" />,
        subName: "Anak Sehat",
      },
    ],
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard/health-care",
        icon: LayoutDashboard,
        isActive: location.pathname === "/dashboard/health-care",
      },
      {
        title: "Intervensi",
        url: "/dashboard/health-care/intervention?page=1",
        icon: RiMentalHealthLine,
        isActive: location.pathname === "/dashboard/health-care/intervention",
      },
    ],
  };

  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader onClick={data.user.onClick} data={data} />
        <div className="flex flex-1">
          <AppSidebar data={data} />
          <SidebarInset className="bg-[#f0f4fa] overflow-scroll p-6">
            <Outlet />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
