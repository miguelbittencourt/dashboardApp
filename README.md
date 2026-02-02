# 📊 DashboardApp

Um aplicativo de dashboard **full-stack** construído com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** e **PostgreSQL**.
Permite gerenciar **Customers** e **Invoices** com pesquisa, paginação, visualização de dados agregados e layout responsivo.

📍 Deploy disponível em:
🔗 [https://dashboard-app-lilac-two.vercel.app/](https://dashboard-app-lilac-two.vercel.app/)

---

## 🧠 Visão geral

Esse projeto tem como objetivo servir como um **painel de controle (dashboard)** para aprendizado e demonstração de conceitos importantes em Next.js:

- Estrutura de rotas com **App Router**
- Client e Server Components
- Carregamento prévio de componentes com Suspense(esqueleto)
- Paginação e pesquisa com SQL
- Conexão com banco de dados PostgreSQL (Vercel Postgres)
- Layout responsivo com Tailwind CSS
- Abstração de dados no backend com funções `fetch*` personalizadas

---

## 🧱 Features

✅ Listagem de _Customers_ com:

- Pesquisa por nome ou email
- Paginação
- Dados totais personalizados por cliente (invoices, pendentes, pagos)

✅ Listagem de _Invoices_ com:

- Pesquisa por múltiplos campos
- Paginação
- Formatação de datas e valores

✅ Componentes reutilizáveis
✅ Skeletons de carregamento com Suspense

---

## 💡 Início rápido (desenvolvimento local)

Para rodar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/miguelbittencourt/dashboardApp.git
cd dashboardApp
```

2. Instale dependências:

```bash
pnpm install
# ou npm install
```

3. Configure o banco de dados:

- Configure um **PostgreSQL** (local ou via Vercel Postgres)
- Defina a variável `POSTGRES_URL` no `.env`

4. Rode a aplicação:

```bash
pnpm dev
# ou npm run dev
```

Abra o navegador em:
➡️ `http://localhost:3000`

Nesse ponto, ainda não há dados no banco para que a aplicação consuma
Você precisará popular o banco após executar a aplicação
Existem dados de exemplo para popular o banco, estão presentes em `/app/lib/placeholder-data.ts` caso queira visualiza-los
Esses dados servem para alimentar o banco, usando a rota `http://localhost:3000/seed`
Essa rota executa algumas funções para popular o banco e deixa-lo pronto para uso, você pode ver essas funções em `/app/seed/route.ts`.
