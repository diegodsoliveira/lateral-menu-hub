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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Check, X, AlertCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Dados mockados para exemplo
const pendingCacs = [
  {
    id: "CAC001",
    nome: "João Silva",
    cpf: "123.456.789-00",
    dataSubmissao: "2024-01-28",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro ABC",
      arma: "Pistola Taurus G3C",
      calibre: ".9mm",
      dataUso: "2024-02-15",
      duracao: "2 horas",
      instrutor: "Carlos Santos",
      observacoes: "Treinamento básico de tiro"
    }
  },
  {
    id: "CAC002",
    nome: "Maria Santos",
    cpf: "987.654.321-00",
    dataSubmissao: "2024-01-29",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro XYZ",
      arma: "Revólver Taurus 838",
      calibre: ".38",
      dataUso: "2024-02-16",
      duracao: "1.5 horas",
      instrutor: "Ana Paula",
      observacoes: "Prática de tiro defensivo"
    }
  },
  {
    id: "CAC003",
    nome: "Pedro Oliveira",
    cpf: "456.789.123-00",
    dataSubmissao: "2024-01-30",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro Delta",
      arma: "Pistola Glock G17",
      calibre: "9mm",
      dataUso: "2024-02-17",
      duracao: "3 horas",
      instrutor: "Roberto Alves",
      observacoes: "Treinamento avançado"
    }
  },
  {
    id: "CAC004",
    nome: "Ana Costa",
    cpf: "789.123.456-00",
    dataSubmissao: "2024-01-31",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro Omega",
      arma: "Carabina Taurus T4",
      calibre: "5.56",
      dataUso: "2024-02-18",
      duracao: "2.5 horas",
      instrutor: "Marcos Silva",
      observacoes: "Treinamento com rifle"
    }
  },
  {
    id: "CAC005",
    nome: "Lucas Ferreira",
    cpf: "321.654.987-00",
    dataSubmissao: "2024-02-01",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro Alpha",
      arma: "Pistola Beretta 92",
      calibre: "9mm",
      dataUso: "2024-02-19",
      duracao: "2 horas",
      instrutor: "Paulo Santos",
      observacoes: "Treinamento tático"
    }
  },
  {
    id: "CAC006",
    nome: "Carla Rodrigues",
    cpf: "654.987.321-00",
    dataSubmissao: "2024-02-02",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro Beta",
      arma: "Revólver Smith & Wesson 686",
      calibre: ".357",
      dataUso: "2024-02-20",
      duracao: "1.5 horas",
      instrutor: "Fernando Lima",
      observacoes: "Prática básica"
    }
  },
  {
    id: "CAC007",
    nome: "Ricardo Almeida",
    cpf: "147.258.369-00",
    dataSubmissao: "2024-02-03",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro Gamma",
      arma: "Pistola CZ P-07",
      calibre: "9mm",
      dataUso: "2024-02-21",
      duracao: "2 horas",
      instrutor: "Juliana Costa",
      observacoes: "Treinamento intermediário"
    }
  },
  {
    id: "CAC008",
    nome: "Beatriz Lima",
    cpf: "258.369.147-00",
    dataSubmissao: "2024-02-04",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro Sigma",
      arma: "Pistola HK VP9",
      calibre: "9mm",
      dataUso: "2024-02-22",
      duracao: "3 horas",
      instrutor: "Ricardo Oliveira",
      observacoes: "Treinamento avançado"
    }
  },
  {
    id: "CAC009",
    nome: "Fernando Santos",
    cpf: "369.147.258-00",
    dataSubmissao: "2024-02-05",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro Epsilon",
      arma: "Carabina AR-15",
      calibre: "5.56",
      dataUso: "2024-02-23",
      duracao: "2.5 horas",
      instrutor: "Amanda Silva",
      observacoes: "Treinamento com rifle"
    }
  },
  {
    id: "CAC010",
    nome: "Mariana Costa",
    cpf: "741.852.963-00",
    dataSubmissao: "2024-02-06",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro Zeta",
      arma: "Pistola Sig Sauer P320",
      calibre: "9mm",
      dataUso: "2024-02-24",
      duracao: "2 horas",
      instrutor: "Rafael Santos",
      observacoes: "Treinamento tático avançado"
    }
  },
  {
    id: "CAC011",
    nome: "Gabriel Oliveira",
    cpf: "852.963.741-00",
    dataSubmissao: "2024-02-07",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro Theta",
      arma: "Pistola Walther PPQ",
      calibre: "9mm",
      dataUso: "2024-02-25",
      duracao: "2 horas",
      instrutor: "Camila Lima",
      observacoes: "Treinamento de precisão"
    }
  },
  {
    id: "CAC012",
    nome: "Isabella Santos",
    cpf: "963.741.852-00",
    dataSubmissao: "2024-02-08",
    status: "Pendente",
    habitualidade: {
      clube: "Clube de Tiro Iota",
      arma: "Revólver Taurus RT856",
      calibre: ".38",
      dataUso: "2024-02-26",
      duracao: "1.5 horas",
      instrutor: "Lucas Ferreira",
      observacoes: "Treinamento básico"
    }
  }
];

const Dashboard = () => {
  const [selectedCAC, setSelectedCAC] = useState<typeof pendingCacs[0] | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
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

  // Pagination logic
  const totalPages = Math.ceil(pendingCacs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCacs = pendingCacs.slice(startIndex, endIndex);

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
            {currentCacs.map((cac) => (
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
        <div className="p-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      {/* Modal de Visualização de Habitualidade */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Detalhes da Habitualidade - {selectedCAC?.nome}</DialogTitle>
            <DialogDescription>
              Informações sobre a última atividade registrada
            </DialogDescription>
          </DialogHeader>
          {selectedCAC && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Clube</p>
                  <p>{selectedCAC.habitualidade.clube}</p>
                </div>
                <div>
                  <p className="font-medium">Arma</p>
                  <p>{selectedCAC.habitualidade.arma}</p>
                </div>
                <div>
                  <p className="font-medium">Calibre</p>
                  <p>{selectedCAC.habitualidade.calibre}</p>
                </div>
                <div>
                  <p className="font-medium">Data de Uso</p>
                  <p>{new Date(selectedCAC.habitualidade.dataUso).toLocaleDateString("pt-BR")}</p>
                </div>
                <div>
                  <p className="font-medium">Duração</p>
                  <p>{selectedCAC.habitualidade.duracao}</p>
                </div>
                <div>
                  <p className="font-medium">Instrutor</p>
                  <p>{selectedCAC.habitualidade.instrutor}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-medium">Observações</p>
                  <p>{selectedCAC.habitualidade.observacoes}</p>
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
      <AlertDialog open={isRejectModalOpen} onOpenChange={setIsRejectModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Rejeitar Cadastro</AlertDialogTitle>
            <AlertDialogDescription>
              Por favor, informe o motivo da rejeição.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="Motivo da rejeição"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsRejectModalOpen(false)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleReject}>
              Confirmar Rejeição
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dashboard;