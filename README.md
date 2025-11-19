# Ivox Scale - Site Institucional

Site premium dark theme para agência de growth hacking e marketing digital.

## 🚀 Tecnologias

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animações**: Framer Motion
- **Backend**: Netlify Functions (Serverless)
- **Deploy**: Netlify

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento Local

```bash
npm run dev
```

O site estará disponível em `http://localhost:5000`

## 🌐 Deploy na Netlify

### Opção 1: Deploy via Git (Recomendado)

1. Faça push do código para GitHub/GitLab/Bitbucket
2. Conecte o repositório no painel da Netlify
3. A Netlify detectará automaticamente as configurações
4. Deploy automático a cada push!

### Opção 2: Deploy via Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 📁 Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   └── lib/           # Utilitários
│   └── public/            # Arquivos estáticos
├── netlify/
│   └── functions/         # Serverless functions
├── attached_assets/       # Imagens geradas
└── netlify.toml          # Configuração Netlify
```

## 🎨 Páginas

- **Home** (`/`) - Hero, features, cases, depoimentos, FAQ
- **Metodologia** (`/metodologia`) - Processo em 4 etapas
- **Serviços** (`/servicos`) - Serviços principais e complementares
- **Cases** (`/cases`) - Portfólio com filtros
- **Sobre** (`/sobre`) - História, valores, contato

## 🔧 Configuração de Ambiente

Não há variáveis de ambiente necessárias para a versão básica. Para funcionalidades avançadas, configure no painel da Netlify:

- `SENDGRID_API_KEY` - Para envio de emails
- `MAILCHIMP_API_KEY` - Para newsletter
- Etc.

## 📝 Formulários

Os formulários de contato e newsletter estão conectados a Netlify Functions em `/api/contact` e `/api/newsletter`.

Para customizar o comportamento, edite `netlify/functions/api.ts`.

## 🎯 SEO

O site possui:
- Meta tags otimizadas
- Open Graph tags
- Twitter Card tags
- Sitemap automático (via Netlify)
- URLs amigáveis

## 📱 Responsividade

Design totalmente responsivo otimizado para:
- Desktop (1920px+)
- Laptop (1280px - 1919px)
- Tablet (768px - 1279px)
- Mobile (320px - 767px)

## 🌙 Dark Theme

O site utiliza um tema dark premium com:
- Gradientes iridescentes (cyan, purple, pink)
- Efeitos glass morphism
- Animações suaves
- Micro-interações

## 📄 Licença

Propriedade da Ivox Scale. Todos os direitos reservados.
