# Personal Finance Tracker

O **Personal Finance Tracker** é um sistema de gerenciamento financeiro personalizado que permite o acompanhamento de despesas, receitas, orçamento e investimentos. Além disso, este projeto serve como uma oportunidade para aprimorar as habilidades de desenvolvimento.

## Funcionalidades

- Registro de transações financeiras.
- Geração de relatórios financeiros.
- Gestão de despesas e receitas.
- Acompanhamento de orçamento pessoal.
- Monitoramento de investimentos.

## Tecnologias e Ferramentas

Para o desenvolvimento deste projeto, utilizamos as seguintes tecnologias, bibliotecas e ferramentas:

- **Node.js**: Plataforma para a construção do servidor.
- **Express.js**: Framework para criação de APIs.
- **Prisma**: ORM (Object-Relational Mapping) para acesso ao banco de dados.
- **SQLite**: Banco de dados para armazenamento de informações financeiras.
- **React**: Biblioteca JavaScript para a construção da interface do usuário.

## Configuração e Execução

### Backend (Node.js)

1. Clone este repositório.
2. Navegue até a pasta `FinancePal-Backend`.
3. Execute `pnpm install` para instalar as dependências.
4. Crie um arquivo `.env` com as configurações do banco de dados, por exemplo: `DATABASE_URL=file:./dev.db`.
5. Execute `npx prisma migrate dev --name initial` para criar o banco de dados e aplicar as migrações.
6. Inicie o servidor com `pnpm start`.

### Frontend (React)

1. Navegue até a pasta `FinancePal` (projeto React).
2. Execute `pnpm install` para instalar as dependências.
3. Inicie o aplicativo com `pnpm dev`.

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Você pode abrir problemas, sugerir melhorias ou enviar solicitações de pull. Juntos, podemos tornar este sistema de gerenciamento financeiro ainda melhor.

## Licença

Este projeto é licenciado sob a MIT License - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
