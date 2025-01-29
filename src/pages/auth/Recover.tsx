import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const Recover = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add password recovery logic here
    setSent(true);
  };

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <Card className="w-full max-w-md p-6">
        <h1 className="mb-6 text-2xl font-semibold">Recuperar Senha</h1>
        {!sent ? (
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
            <Button type="submit" className="w-full">
              Enviar Link de Recuperação
            </Button>
          </form>
        ) : (
          <div className="text-center">
            <p className="mb-4">
              Se existe uma conta com este email, você receberá um link para
              redefinir sua senha.
            </p>
            <Link to="/auth/login">
              <Button variant="outline">Voltar para Login</Button>
            </Link>
          </div>
        )}
        <div className="mt-4 text-center text-sm">
          <Link to="/auth/login" className="text-primary hover:underline">
            Voltar para Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Recover;