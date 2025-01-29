import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    navigate("/");
  };

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <Card className="w-full max-w-md p-6">
        <h1 className="mb-6 text-2xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          <Link to="/auth/recover" className="text-primary hover:underline">
            Esqueceu sua senha?
          </Link>
        </div>
        <div className="mt-2 text-center text-sm">
          <Link to="/auth/register" className="text-primary hover:underline">
            Criar uma conta
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;