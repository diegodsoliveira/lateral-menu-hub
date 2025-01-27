import { Card } from "@/components/ui/card";

const ClubeTiro = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Clube de Tiro</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-medium mb-2">Membros Ativos</h3>
          <p className="text-2xl font-bold">156</p>
        </Card>
        <Card className="p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-medium mb-2">Treinos Realizados</h3>
          <p className="text-2xl font-bold">432</p>
        </Card>
        <Card className="p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-medium mb-2">Competições</h3>
          <p className="text-2xl font-bold">12</p>
        </Card>
      </div>
    </div>
  );
};

export default ClubeTiro;