import { LayoutDashboard, HeadphonesIcon, Repeat2, BarChart3, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "CAC",
    icon: HeadphonesIcon,
    path: "/cac",
  },
  {
    title: "Habitualidade",
    icon: Repeat2,
    path: "/habitualidade",
  },
  {
    title: "Relatórios",
    icon: BarChart3,
    path: "/relatorios",
  },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={cn(
        "h-screen bg-sidebar border-r flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="h-16 border-b flex items-center justify-between px-4">
        {!collapsed && <span className="font-semibold">Menu</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-muted/30 rounded-full"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <nav className="flex-1 p-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg mb-1 hover:bg-muted/30 transition-colors",
              location.pathname === item.path && "bg-primary/10 text-primary"
            )}
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};