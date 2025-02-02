import { LayoutDashboard, HeadphonesIcon, Repeat2, BarChart3, Menu, Target, FileText, PieChart, TrendingUp, Users, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSidebar } from "@/components/ui/sidebar";

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
    title: "Clube de Tiro",
    icon: Target,
    path: "/clube-tiro",
  },
  {
    title: "Relatórios",
    icon: BarChart3,
    path: "/relatorios",
    subItems: [
      {
        title: "Desempenho",
        icon: Activity,
        path: "/relatorios/desempenho",
      },
      {
        title: "Financeiro",
        icon: TrendingUp,
        path: "/relatorios/financeiro",
      },
      {
        title: "Membros",
        icon: Users,
        path: "/relatorios/membros",
      },
      {
        title: "Estatísticas",
        icon: PieChart,
        path: "/relatorios/estatisticas",
      },
      {
        title: "Documentos",
        icon: FileText,
        path: "/relatorios/documentos",
      },
    ],
  },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { open: isOpen, setOpen } = useSidebar();

  const toggleSubmenu = (title: string) => {
    setExpandedMenu(expandedMenu === title ? null : title);
  };

  const renderMenuItems = () => (
    <nav className="flex-1 p-2">
      {menuItems.map((item) => (
        <div key={item.path}>
          <Link
            to={item.path}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg mb-1 hover:bg-sidebar-accent transition-colors text-sidebar-foreground",
              location.pathname === item.path && "bg-sidebar-accent"
            )}
            onClick={() => {
              if (item.subItems) {
                toggleSubmenu(item.title);
              }
              if (isMobile) {
                setOpen(false);
              }
            }}
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && (
              <>
                <span>{item.title}</span>
                {item.subItems && (
                  <span className="ml-auto">
                    {expandedMenu === item.title ? "−" : "+"}
                  </span>
                )}
              </>
            )}
          </Link>
          {!collapsed && item.subItems && expandedMenu === item.title && (
            <div className="ml-6 space-y-1">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.path}
                  to={subItem.path}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-sidebar-accent transition-colors text-sidebar-foreground",
                    location.pathname === subItem.path && "bg-sidebar-accent"
                  )}
                  onClick={() => isMobile && setOpen(false)}
                >
                  <subItem.icon className="h-4 w-4" />
                  <span>{subItem.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[240px] p-0">
          <div className="h-16 border-b border-sidebar-border flex items-center px-4">
            <span className="font-semibold text-sidebar-foreground">Menu</span>
          </div>
          {renderMenuItems()}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={cn(
        "h-screen bg-sidebar border-r flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="h-16 border-b border-sidebar-border flex items-center justify-between px-4">
        {!collapsed && <span className="font-semibold text-sidebar-foreground">Menu</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-sidebar-accent rounded-full text-sidebar-foreground"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {renderMenuItems()}
    </div>
  );
};