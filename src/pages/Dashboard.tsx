import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <h3 className="font-medium mb-2">Total de Atendimentos</h3>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-medium mb-2">Tempo Médio</h3>
          <p className="text-2xl font-bold">5.2min</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-medium mb-2">Satisfação</h3>
          <p className="text-2xl font-bold">98%</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-medium mb-2">Chamados Abertos</h3>
          <p className="text-2xl font-bold">42</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;