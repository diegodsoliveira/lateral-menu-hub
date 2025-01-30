import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Check, X, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

// Dados mockados para exemplo
const pendingCacs = [
  {
    id: "CAC001",
    nome: "João Silva",
    cpf: "123.456.789-00",
    dataSubmissao: "2024-01-28",
    status: "Pendente",
    rg: "12.345.678-9",
    dataNascimento: "1980-05-15",
    endereco: "Rua das Flores, 123",
    cidade: "São Paulo",
    estado: "SP",
    telefone: "(11) 98765-4321",
    email: "joao.silva@email.com",
  },
  {
    id: "CAC002",
    nome: "Maria Santos",
    cpf: "987.654.321-00",
    dataSubmissao: "2024-01-29",
    status: "Pendente",
    rg: "98.765.432-1",
    dataNascimento: "1975-08-22",
    endereco: "Av. Principal, 456",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    telefone: "(21) 98765-4321",
    email: "maria.santos@email.com",
  },
  {
    id: "CAC003",
    nome: "Pedro Oliveira",
    cpf: "456.789.123-00",
    dataSubmissao: "2024-01-29",
    status: "Pendente",
    rg: "45.678.912-3",
    dataNascimento: "1990-03-10",
    endereco: "Rua do Comércio, 789",
    cidade: "Curitiba",
    estado: "PR",
    telefone: "(41) 98765-4321",
    email: "pedro.oliveira@email.com",
  },
];

const Dashboard = () => {
  const [selectedCAC, setSelectedCAC] = useState<typeof pendingCacs[0] | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const navigate = useNavigate();

  const handleView = (cac: typeof pendingCacs[0]) => {
    setSelectedCAC(cac);
    setIsViewModalOpen(true);
  };

  const handleApprove = () => {
    toast({
      title: "CAC Aprovado",
      description: `O cadastro de ${selectedCAC?.nome} foi aprovado com sucesso.`,
    });
    setIsViewModalOpen(false);
    setSelectedCAC(null);
  };

  const handleReject = () => {
    if (!rejectReason) {
      toast({
        title: "Erro",
        description: "É necessário informar uma justificativa para rejeição.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "CAC Rejeitado",
      description: `O cadastro de ${selectedCAC?.nome} foi rejeitado.`,
    });
    setIsRejectModalOpen(false);
    setIsViewModalOpen(false);
    setSelectedCAC(null);
    setRejectReason("");
  };

  const handlePending = () => {
    toast({
      title: "Status Atualizado",
      description: `O cadastro de ${selectedCAC?.nome} foi marcado como pendente.`,
    });
    setIsViewModalOpen(false);
    setSelectedCAC(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-medium mb-2">Total de Atendimentos</h3>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card className="p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-medium mb-2">Tempo Médio</h3>
          <p className="text-2xl font-bold">5.2min</p>
        </Card>
        <Card className="p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-medium mb-2">Satisfação</h3>
          <p className="text-2xl font-bold">98%</p>
        </Card>
        <Card className="p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-medium mb-2">Chamados Abertos</h3>
          <p className="text-2xl font-bold">42</p>
        </Card>
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">CACs Pendentes de Aprovação</h2>
          <Badge variant="secondary">{pendingCacs.length} pendentes</Badge>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Data de Submissão</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingCacs.map((cac) => (
              <TableRow key={cac.id}>
                <TableCell className="font-medium">{cac.id}</TableCell>
                <TableCell>{cac.nome}</TableCell>
                <TableCell>{cac.cpf}</TableCell>
                <TableCell>{new Date(cac.dataSubmissao).toLocaleDateString('pt-BR')}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{cac.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleView(cac)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Modal de Visualização */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Detalhes do CAC</DialogTitle>
            <DialogDescription>
              Visualize os dados do CAC e tome uma ação
            </DialogDescription>
          </DialogHeader>
          {selectedCAC && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Nome</p>
                  <p>{selectedCAC.nome}</p>
                </div>
                <div>
                  <p className="font-medium">CPF</p>
                  <p>{selectedCAC.cpf}</p>
                </div>
                <div>
                  <p className="font-medium">RG</p>
                  <p>{selectedCAC.rg}</p>
                </div>
                <div>
                  <p className="font-medium">Data de Nascimento</p>
                  <p>{new Date(selectedCAC.dataNascimento).toLocaleDateString("pt-BR")}</p>
                </div>
                <div>
                  <p className="font-medium">Endereço</p>
                  <p>{selectedCAC.endereco}</p>
                </div>
                <div>
                  <p className="font-medium">Cidade/Estado</p>
                  <p>{selectedCAC.cidade}/{selectedCAC.estado}</p>
                </div>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p>{selectedCAC.telefone}</p>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>{selectedCAC.email}</p>
                </div>
              </div>
              <DialogFooter className="flex gap-2 justify-between sm:justify-end">
                <Button
                  variant="outline"
                  onClick={() => setIsRejectModalOpen(true)}
                >
                  <X className="mr-2 h-4 w-4" />
                  Rejeitar
                </Button>
                <Button
                  variant="outline"
                  onClick={handlePending}
                >
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Pendência
                </Button>
                <Button onClick={handleApprove}>
                  <Check className="mr-2 h-4 w-4" />
                  Aprovar
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de Rejeição */}
      <Dialog open={isRejectModalOpen} onOpenChange={setIsRejectModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rejeitar Cadastro</DialogTitle>
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
            <Button variant="outline" onClick={() => setIsRejectModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleReject}>
              Confirmar Rejeição
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;