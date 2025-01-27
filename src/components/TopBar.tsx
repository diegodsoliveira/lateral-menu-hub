import { Bell, Moon, Search, Sun, User } from "lucide-react";
import { Input } from "./ui/input";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const TopBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-16 border-b flex items-center justify-between px-4 bg-background">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar..."
            className="pl-8 bg-accent/50 border-none focus:bg-accent/80 transition-colors"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-muted/30 rounded-full"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Alternar tema</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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