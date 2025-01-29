import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Habitualidade = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mock data for demonstration
  const habitualidades = [
    {
      id: 1,
      data: "2024-01-28",
      arma: "Pistola Taurus G3C",
      tiros: 50,
      status: "Pendente",
      foto: "https://placeholder.com/300x200",
    },
    {
      id: 2,
      data: "2024-01-27",
      arma: "Revólver Taurus 838",
      tiros: 30,
      status: "Pendente",
      foto: "https://placeholder.com/300x200",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Habitualidade</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>Nova Habitualidade</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Registrar Nova Habitualidade</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="foto">Foto</Label>
                <Input id="foto" type="file" accept="image/*" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="arma">Arma Utilizada</Label>
                <Input id="arma" placeholder="Ex: Pistola Taurus G3C" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tiros">Quantidade de Tiros</Label>
                <Input id="tiros" type="number" min="1" />
              </div>
              <Button type="submit" onClick={() => setIsOpen(false)}>
                Registrar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Arma</TableHead>
            <TableHead>Tiros</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {habitualidades.map((hab) => (
            <TableRow key={hab.id}>
              <TableCell>{new Date(hab.data).toLocaleDateString()}</TableCell>
              <TableCell>{hab.arma}</TableCell>
              <TableCell>{hab.tiros}</TableCell>
              <TableCell>
                <Badge variant="secondary">{hab.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Habitualidade;