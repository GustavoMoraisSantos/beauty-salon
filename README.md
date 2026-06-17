# Monica Bonifácio – Landing Page

Landing page institucional para **Monica Bonifácio**, especialista em design de sobrancelhas, extensão de cílios (Lash Designer), maquiagem profissional e penteados.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Estrutura

```
src/
├── app/          → Layout, page e estilos globais
├── components/   → Componentes modulares (Header, Hero, About, Services, etc.)
└── data/         → Dados centralizados do negócio (business.ts)
```

## Instalação

```bash
git clone https://github.com/GustavoMoraisSantos/beauty-salon.git
cd beauty-salon
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Personalização

Todas as informações do negócio (nome, serviços, contatos, textos) estão centralizadas em `src/data/business.ts`. Para atualizar o site, basta editar esse arquivo.
