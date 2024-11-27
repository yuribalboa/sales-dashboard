# Sales Dashboard 🚀

Uma aplicação frontend e backend desenvolvida com **React** e **TypeScript**, que fornece um painel de vendas para empresas e vendedores. Os usuários podem realizar login, cadastro, e gerenciar leads, com informações consumidas de uma API. 

---

## 📌 Funcionalidades

- **Autenticação de Usuários**: Login e cadastro com JWT para autenticação.
- **Gestão de Leads**: Interface para registrar e visualizar leads.
- **Dashboard de Vendas**: Apresenta informações de vendas em tempo real.
- **Navegação**: Utilização de React Router para gerenciamento de rotas.
- **Cookies**: Gerenciamento seguro de tokens e dados de sessão.
- **Design Responsivo**: Adaptado para diferentes tamanhos de tela.
- **Deploy**: Implementado no Vercel para fácil acesso.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- React (com hooks como `ChangeEvent`, `useState`, `useEffect`)
- TypeScript (`tsx` e `ts`)
- React Router
- JWT Decode
- Cookies
- Vite
- CSS/SCSS
- ESLint

### **Backend**
- API RESTful fornecida por terceiros (observação: **API fora do ar durante os testes**).

### **Testes**
- **Jest**: Para testes unitários do frontend.
- **Cypress**: Configurado para testes de integração e E2E (**observação: testes não executados devido a problemas no navegador**).

### **Deploy**
- Vercel

---

## 🚀 Instalação e Execução

### **Requisitos**
- Node.js v16 ou superior
- Gerenciador de pacotes (NPM ou Yarn)
- Vite para desenvolvimento
- Configuração de variáveis `.env`

### **Passo a Passo**

1. **Clone o repositório:**
   ```
   git clone https://github.com/seu-usuario/salesboard-app.git
   cd salesboard-app
   ```
Instale as dependências:
```
npm install
```
Configure o arquivo .env: Crie um arquivo .env na raiz do projeto e configure as variáveis necessárias: .env

VITE_API_URL=https://api.exemplo.com
VITE_JWT_SECRET=sua-chave-secreta

Execute a aplicação:
```
npm run dev
```

Abra no navegador:

O projeto será executado em http://localhost:3000.


## 📝 Observações

### Problemas Encontrados

- Cypress: Não foi possível executar testes de integração devido a problemas no navegador de teste.
- API: A API utilizada para fornecer informações estava fora do ar durante o desenvolvimento, impossibilitando a exibição de dados no painel.

### Como Resolver

Para o problema no Cypress, sugere-se reinstalar o navegador de teste ou usar outro ambiente de teste.
Para a API, é necessário verificar a disponibilidade ou utilizar um mock para simular os dados em ambiente local.


