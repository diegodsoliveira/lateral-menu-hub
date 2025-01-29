import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { DashboardLayout } from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import CAC from "./pages/CAC";
import Habitualidade from "./pages/Habitualidade";
import Relatorios from "./pages/Relatorios";
import ClubeTiro from "./pages/ClubeTiro";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Recover from "./pages/auth/Recover";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/recover" element={<Recover />} />
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cac" element={<CAC />} />
              <Route path="/habitualidade" element={<Habitualidade />} />
              <Route path="/clube-tiro" element={<ClubeTiro />} />
              <Route path="/relatorios" element={<Relatorios />} />
              <Route path="/relatorios/:subpage" element={<Relatorios />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;