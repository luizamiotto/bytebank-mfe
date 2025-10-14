# ByteBank MFE 🏦

Uma aplicação bancária moderna construída com **Micro Frontends** usando **Single-SPA**, **React** e **TypeScript**.

## 📋 Sobre o Projeto

O ByteBank MFE é uma aplicação bancária que demonstra a implementação de uma arquitetura de micro frontends escalável e modular. Cada seção da aplicação é desenvolvida e deployada independentemente, permitindo maior flexibilidade de desenvolvimento e manutenção.

## 🏗️ Arquitetura

### Micro Frontends (Apps)

- **Root Config** - Orquestrador principal dos micro frontends
- **Header** - Cabeçalho da aplicação com navegação
- **Central Box** - Dashboard principal com resumo de dados
- **Sidebar** - Menu lateral de navegação
- **Statement** - Extrato e histórico de transações

### Pacotes Compartilhados

- **Components** - Biblioteca de componentes reutilizáveis
- **Context** - Gerenciamento de estado global com React Context
- **Redux** - Gerenciamento de estado com Redux Toolkit
- **Styles** - Estilos globais e temas

## 🚀 Tecnologias

### Core

- **React 18.2.0** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Single-SPA** - Framework para micro frontends
- **Webpack 5** - Bundler de módulos

### Estado & Dados

- **Redux Toolkit** - Gerenciamento de estado preditível
- **React Redux** - Conectores React para Redux
- **React Context** - Gerenciamento de estado local

### UI & Styling

- **Material-UI (MUI)** - Biblioteca de componentes
- **MUI X Charts** - Gráficos e visualizações
- **Emotion** - CSS-in-JS

### Desenvolvimento

- **TurboRepo** - Monorepo de alta performance
- **Babel** - Transpilador JavaScript
- **ESLint** - Linter para código JavaScript/TypeScript
- **Prettier** - Formatador de código
- **Jest** - Framework de testes

### DevOps

- **Docker** - Containerização
- **Docker Compose** - Orquestração de containers

## 📁 Estrutura do Projeto

```text
bytebank-mfe/
├── apps/                          # Micro frontends
│   ├── central-box/              # Dashboard principal
│   ├── header/                   # Cabeçalho
│   ├── sidebar/                  # Menu lateral
│   └── statement/                # Extrato
├── packages/                     # Pacotes compartilhados
│   ├── components/               # Componentes reutilizáveis
│   ├── context/                  # React Context providers
│   ├── redux/                    # Store Redux
│   ├── root/                     # Configuração Single-SPA
│   └── styles/                   # Estilos globais
├── docker-compose.yml            # Configuração Docker
├── turbo.json                    # Configuração TurboRepo
└── package.json                  # Dependências do workspace
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- **Node.js** 18+
- **npm** 8+
- **Docker** (opcional)

### 1. Clone o repositório

```bash
git clone https://github.com/luizamiotto/bytebank-mfe.git
cd bytebank-mfe
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em modo desenvolvimento

```bash
npm run dev
```

### 4. Build de produção

```bash
npm run build
```

## 🐳 Docker

### Executar com Docker Compose

```bash
docker-compose up -d
```

### Acessar os serviços

- **Root Config**: <http://localhost:9000>
- **Header**: <http://localhost:8500>
- **Sidebar**: <http://localhost:8501>
- **Central Box**: <http://localhost:8502>
- **Statement**: <http://localhost:8503>

## 📦 Scripts Disponíveis

### Workspace Root

```bash
npm run dev          # Executa todos os microfrontends em modo desenvolvimento
npm run build        # Build de produção de todos os pacotes
npm run build:webpack # Build webpack de todos os pacotes
npm test             # Executa os testes
npm run clean        # Limpa node_modules e cache
```

### Scripts por Pacote

Cada pacote/app tem seus próprios scripts:

```bash
npm run start        # Desenvolvimento na porta padrão
npm run start:standalone # Modo standalone
npm run build        # Build de produção
npm run build:types  # Gera tipos TypeScript
npm run test         # Executa testes
npm run lint         # Executa linter
npm run format      # Formata código
```

## 🏛️ Arquitetura de Micro Frontends

### Single-SPA Root Config

O `root-config` atua como orquestrador, registrando e roteando entre os diferentes micro frontends.

### Comunicação entre MFEs

- **Eventos customizados** para comunicação cross-app
- **Estado compartilhado** via Redux Store
- **Context providers** para dados globais

### Dependências Compartilhadas

- React e React-DOM como externals
- Bibliotecas UI (MUI) compartilhadas
- Utilitários comuns nos pacotes

## 🔧 Desenvolvimento

### Adicionando um novo Micro Frontend

1. **Crie a estrutura do app**:

```bash
mkdir apps/novo-mfe
cd apps/novo-mfe
npm init -y
```

2. Configure webpack e dependências
3. Registre no root-config
4. Adicione ao docker-compose.yml

### Boas Práticas

- ✅ **Componentes pequenos e reutilizáveis**
- ✅ **Tipagem TypeScript em todos os arquivos**
- ✅ **Testes para funcionalidades críticas**
- ✅ **Commits semânticos**
- ✅ **Code review obrigatório**

## 👥 Autores

- **Luiza Miotto** - [@luizamiotto](https://github.com/luizamiotto)
- **Giovanna Niemeyer** - [@gioniemeyer](https://github.com/gioniemeyer)
