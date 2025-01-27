import { Bell, Search, User } from "lucide-react";
import { Input } from "./ui/input";

export const TopBar = () => {
  return (
    <div className="h-16 border-b flex items-center justify-between px-4 bg-white">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar..."
            className="pl-8 bg-muted/30 border-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative hover:bg-muted/30 p-2 rounded-full">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>
        <button className="hover:bg-muted/30 p-2 rounded-full">
          <User className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};