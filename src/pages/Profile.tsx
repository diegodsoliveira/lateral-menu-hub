import { Card } from "@/components/ui/card";

const Profile = () => {
  // Dados mockados do perfil
  const profile = {
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
    foto: "https://i.pravatar.cc/300",
    cr: "123456789",
    validadeCR: "2025-12-31",
    categoria: "Caçador",
    ultimaAtualizacao: "2024-01-15",
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Perfil do CAC</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 md:col-span-1">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={profile.foto}
              alt="Foto do perfil"
              className="rounded-full w-32 h-32 object-cover"
            />
            <h2 className="text-xl font-semibold">{profile.nome}</h2>
            <Badge variant="secondary">{profile.categoria}</Badge>
          </div>
        </Card>

        <Card className="p-6 md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-muted-foreground">CPF</h3>
              <p>{profile.cpf}</p>
            </div>
            <div>
              <h3 className="font-medium text-muted-foreground">RG</h3>
              <p>{profile.rg}</p>
            </div>
            <div>
              <h3 className="font-medium text-muted-foreground">Data de Nascimento</h3>
              <p>{new Date(profile.dataNascimento).toLocaleDateString("pt-BR")}</p>
            </div>
            <div>
              <h3 className="font-medium text-muted-foreground">Telefone</h3>
              <p>{profile.telefone}</p>
            </div>
            <div className="col-span-2">
              <h3 className="font-medium text-muted-foreground">Email</h3>
              <p>{profile.email}</p>
            </div>
            <div className="col-span-2">
              <h3 className="font-medium text-muted-foreground">Endereço</h3>
              <p>{profile.endereco}</p>
            </div>
            <div>
              <h3 className="font-medium text-muted-foreground">Cidade</h3>
              <p>{profile.cidade}</p>
            </div>
            <div>
              <h3 className="font-medium text-muted-foreground">Estado</h3>
              <p>{profile.estado}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:col-span-3">
          <h3 className="text-lg font-semibold mb-4">Informações do CR</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-medium text-muted-foreground">Número do CR</h4>
              <p>{profile.cr}</p>
            </div>
            <div>
              <h4 className="font-medium text-muted-foreground">Validade</h4>
              <p>{new Date(profile.validadeCR).toLocaleDateString("pt-BR")}</p>
            </div>
            <div>
              <h4 className="font-medium text-muted-foreground">Status</h4>
              <Badge variant="default">{profile.status}</Badge>
            </div>
            <div>
              <h4 className="font-medium text-muted-foreground">Última Atualização</h4>
              <p>{new Date(profile.ultimaAtualizacao).toLocaleDateString("pt-BR")}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;