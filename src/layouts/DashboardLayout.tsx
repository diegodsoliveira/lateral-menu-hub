import TopBar from "@/components/TopBar";
import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarProvider } from "@/components/ui/sidebar";

export const DashboardLayout = () => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        {!isMobile && <Sidebar />}
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar />
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};