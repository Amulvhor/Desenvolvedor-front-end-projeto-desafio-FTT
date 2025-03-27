Sistema de Reservas - UniEVANGÉLICA

Sistema de gerenciamento de reservas de salas acadêmicas da UniEVANGÉLICA, desenvolvido para otimizar o processo de reserva e administração de espaços pelos coordenadores de curso.

Tecnologias:
React 18
TypeScript
Tailwind CSS
React Router DOM
React Query
Recharts
Lucide React
React Hot Toast
Axios
Zustand (gerenciamento de estado)
Chart.js (gráficos e estatísticas)
Jest + React Testing Library (testes unitários)
Cypress (testes end-to-end)

Requisitos:
Node.js 18.0.0 ou superior
npm 9.0.0 ou superior
Conta na UniEVANGÉLICA com permissão para acessar o sistema

Instalação:
1-Clone o repositório:
git clone https://github.com/seu-usuario/sistema-reservas-uniev.git
cd sistema-reservas-uniev

2-Instalação de dependências:
npm install

3-Configuração das variáveis de ambiente:
Criar um arquivo .env na raiz do projeto
Copiar o conteúdo de .env.example
Preencher com as configurações do seu ambiente

4-Inicie o servidor de desenvolvimento:
npm run dev

Funcionalidades:

1-Dashboard de Reservas:
.Visualização de salas disponíveis
.Filtros por bloco, capacidade e recursos
.Indicadores visuais de disponibilidade
.Sistema de busca integrado

2-Gerenciamento de Reservas:
.Agendamento de salas
.Visualização de reservas atuais
.Cancelamento de reservas
.Histórico de utilizações

3-Relatórios e Estatísticas:
.Gráficos interativos de ocupação
.Estatísticas de utilização
.Análise por período
.Exportação de dados

4-Notificações:
.Alertas de confirmação
.Lembretes de reservas
.Notificações de conflitos
.Atualizações de status

5-Autenticação (Bônus):
.Login via autenticação JWT
.Proteção de rotas para usuários autenticados
.Mensagens de erro adequadas

Desenvolvimento:

Scripts Disponíveis:
.npm run dev: Inicia o servidor de desenvolvimento
.npm run build: Gera a build de produção
.npm run preview: Visualiza a build de produção localmente
.npm run lint: Executa a verificação de código
.npm run test: Executa os testes unitários
.npm run test:e2e: Executa os testes end-to-end
