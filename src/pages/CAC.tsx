import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { Eye, Edit, Trash, Plus, Search } from "lucide-react";

// Dados mockados
const cacData = [
  {
    id: "CAC001",
    nome: "João Silva",
    cpf: "123.456.789-00",
    rg: "12.345.678-9",
    dataNascimento: "1980-05-15",
    endereco: "Rua das Flores, 123",
    cidade: "São Paulo",
    estado: "SP",
    telefone: "(11) 98765-4321",
    email: "joao.silva@email.com",
    status: "Ativo",
  },
  {
    id: "CAC002",
    nome: "Maria Santos",
    cpf: "987.654.321-00",
    rg: "98.765.432-1",
    dataNascimento: "1975-08-22",
    endereco: "Av. Principal, 456",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    telefone: "(21) 98765-4321",
    email: "maria.santos@email.com",
    status: "Em análise",
  },
];

const CAC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCAC, setSelectedCAC] = useState<typeof cacData[0] | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const filteredCACs = cacData.filter((cac) =>
    cac.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cac.cpf.includes(searchTerm)
  );

  const handleDelete = (cac: typeof cacData[0]) => {
    setSelectedCAC(cac);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    // Implementar lógica de deleção
    setIsDeleteDialogOpen(false);
    setSelectedCAC(null);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Central de Atendimento ao Caçador</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <h3 className="font-medium mb-2">Total de CACs</h3>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-medium mb-2">CACs Ativos</h3>
          <p className="text-2xl font-bold">987</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-medium mb-2">Em Análise</h3>
          <p className="text-2xl font-bold">42</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-medium mb-2">Suspensos</h3>
          <p className="text-2xl font-bold">15</p>
        </Card>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou CPF..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2" />
          Adicionar CAC
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCACs.map((cac) => (
              <TableRow key={cac.id}>
                <TableCell className="font-medium">{cac.id}</TableCell>
                <TableCell>{cac.nome}</TableCell>
                <TableCell>{cac.cpf}</TableCell>
                <TableCell>
                  <Badge
                    variant={cac.status === "Ativo" ? "default" : "secondary"}
                  >
                    {cac.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setSelectedCAC(cac);
                        setIsViewModalOpen(true);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setSelectedCAC(cac);
                        setIsEditModalOpen(true);
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(cac)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Modal de Adicionar CAC */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Adicionar Novo CAC</DialogTitle>
            <DialogDescription>
              Preencha os dados do novo caçador.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Nome completo" />
              <Input placeholder="CPF" />
              <Input placeholder="RG" />
              <Input type="date" placeholder="Data de Nascimento" />
              <Input placeholder="Endereço" />
              <Input placeholder="Cidade" />
              <Input placeholder="Estado" />
              <Input placeholder="Telefone" />
              <Input placeholder="Email" className="col-span-2" />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setIsAddModalOpen(false)}>Salvar</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Visualização */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Detalhes do CAC</DialogTitle>
          </DialogHeader>
          {selectedCAC && (
            <div className="grid gap-4 py-4">
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
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de Edição */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Editar CAC</DialogTitle>
          </DialogHeader>
          {selectedCAC && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <Input defaultValue={selectedCAC.nome} placeholder="Nome completo" />
                <Input defaultValue={selectedCAC.cpf} placeholder="CPF" />
                <Input defaultValue={selectedCAC.rg} placeholder="RG" />
                <Input type="date" defaultValue={selectedCAC.dataNascimento} />
                <Input defaultValue={selectedCAC.endereco} placeholder="Endereço" />
                <Input defaultValue={selectedCAC.cidade} placeholder="Cidade" />
                <Input defaultValue={selectedCAC.estado} placeholder="Estado" />
                <Input defaultValue={selectedCAC.telefone} placeholder="Telefone" />
                <Input defaultValue={selectedCAC.email} placeholder="Email" className="col-span-2" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={() => setIsEditModalOpen(false)}>Salvar</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Dialog de Confirmação de Deleção */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este CAC? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CAC;