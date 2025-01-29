import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, Check, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Habitualidade = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [rejectReason, setRejectReason] = useState("");

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

  const handleApprove = () => {
    toast({
      title: "Habitualidade aprovada",
      description: "A habitualidade foi aprovada com sucesso.",
    });
    setApproveOpen(false);
  };

  const handleReject = () => {
    if (!rejectReason) {
      toast({
        title: "Erro",
        description: "É necessário informar uma justificativa.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Habitualidade rejeitada",
      description: "A habitualidade foi rejeitada com sucesso.",
    });
    setRejectOpen(false);
    setRejectReason("");
  };

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
            <TableHead>Ações</TableHead>
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
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setSelectedItem(hab);
                      setViewOpen(true);
                    }}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setSelectedItem(hab);
                      setApproveOpen(true);
                    }}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setSelectedItem(hab);
                      setRejectOpen(true);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* View Modal */}
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Visualizar Habitualidade</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="grid gap-4">
              <img
                src={selectedItem.foto}
                alt="Foto da habitualidade"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div>
                <p><strong>Data:</strong> {new Date(selectedItem.data).toLocaleDateString()}</p>
                <p><strong>Arma:</strong> {selectedItem.arma}</p>
                <p><strong>Tiros:</strong> {selectedItem.tiros}</p>
                <p><strong>Status:</strong> {selectedItem.status}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Approve Modal */}
      <Dialog open={approveOpen} onOpenChange={setApproveOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Aprovar Habitualidade</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja aprovar esta habitualidade?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setApproveOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleApprove}>Aprovar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reject Modal */}
      <Dialog open={rejectOpen} onOpenChange={setRejectOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rejeitar Habitualidade</DialogTitle>
            <DialogDescription>
              Por favor, informe o motivo da rejeição.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="Motivo da rejeição"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRejectOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleReject}>
              Rejeitar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Habitualidade;