import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const reportCards = [
  {
    title: "Habitualidades",
    description: "Relatório de habitualidades registradas",
    color: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-900 dark:text-purple-100",
  },
  {
    title: "Aprovações",
    description: "Relatório de aprovações realizadas",
    color: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-900 dark:text-green-100",
  },
  {
    title: "Rejeições",
    description: "Relatório de rejeições e motivos",
    color: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-900 dark:text-red-100",
  },
  {
    title: "Estatísticas",
    description: "Estatísticas gerais do sistema",
    color: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-900 dark:text-blue-100",
  },
];

const Relatorios = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-6">Relatórios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportCards.map((card, index) => (
          <Card
            key={index}
            className={cn("cursor-pointer transition-all hover:scale-105", card.color)}
          >
            <CardHeader>
              <CardTitle className={card.textColor}>{card.title}</CardTitle>
              <CardDescription className={card.textColor}>
                {card.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Relatorios;