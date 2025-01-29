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

// Dados mockados para exemplo
const pendingCacs = [
  {
    id: "CAC001",
    nome: "João Silva",
    cpf: "123.456.789-00",
    dataSubmissao: "2024-01-28",
    status: "Pendente",
  },
  {
    id: "CAC002",
    nome: "Maria Santos",
    cpf: "987.654.321-00",
    dataSubmissao: "2024-01-29",
    status: "Pendente",
  },
  {
    id: "CAC003",
    nome: "Pedro Oliveira",
    cpf: "456.789.123-00",
    dataSubmissao: "2024-01-29",
    status: "Pendente",
  },
];

const Dashboard = () => {
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;