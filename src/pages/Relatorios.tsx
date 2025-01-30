import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FileText, CheckCircle, XCircle, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const reportCards = [
  {
    title: "Habitualidades",
    description: "Relatório de habitualidades registradas",
    icon: FileText,
    color: "border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700",
    iconColor: "text-purple-400",
    path: "/relatorios/habitualidades"
  },
  {
    title: "Aprovações",
    description: "Relatório de aprovações realizadas",
    icon: CheckCircle,
    color: "border-green-200 hover:border-green-300 dark:border-green-800 dark:hover:border-green-700",
    iconColor: "text-green-400",
    path: "/relatorios/aprovacoes"
  },
  {
    title: "Rejeições",
    description: "Relatório de rejeições e motivos",
    icon: XCircle,
    color: "border-red-200 hover:border-red-300 dark:border-red-800 dark:hover:border-red-700",
    iconColor: "text-red-400",
    path: "/relatorios/rejeicoes"
  },
  {
    title: "Estatísticas",
    description: "Estatísticas gerais do sistema",
    icon: BarChart,
    color: "border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700",
    iconColor: "text-blue-400",
    path: "/relatorios/estatisticas"
  },
];

const Relatorios = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-6">Relatórios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card
              key={index}
              className={cn(
                "cursor-pointer transition-all hover:scale-105 border-2",
                card.color
              )}
              onClick={() => navigate(card.path)}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className={cn("h-6 w-6", card.iconColor)} />
                  <CardTitle>{card.title}</CardTitle>
                </div>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Relatorios;