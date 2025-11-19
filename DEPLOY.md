# 🚀 Guia de Deploy - Netlify

Este documento contém instruções passo a passo para fazer o deploy do site Ivox Scale na Netlify.

## 📋 Pré-requisitos

- Conta na [Netlify](https://www.netlify.com/)
- Código em um repositório Git (GitHub, GitLab ou Bitbucket)

## 🌐 Método 1: Deploy via Git (Recomendado)

Este é o método mais simples e oferece deploy automático a cada push.

### Passo 1: Prepare seu repositório

```bash
# Adicione todos os arquivos
git add .

# Faça commit
git commit -m "Prepare for Netlify deployment"

# Faça push para seu repositório
git push origin main
```

### Passo 2: Conecte à Netlify

1. Acesse [app.netlify.com](https://app.netlify.com/)
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha seu provedor Git (GitHub/GitLab/Bitbucket)
4. Autorize a Netlify a acessar seus repositórios
5. Selecione o repositório do projeto

### Passo 3: Configure o Build

A Netlify detectará automaticamente as configurações do `netlify.toml`, mas confirme:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Functions directory**: `netlify/functions`

### Passo 4: Deploy!

1. Clique em **"Deploy site"**
2. Aguarde o build completar (2-3 minutos)
3. Seu site estará no ar em uma URL como `https://nome-aleatorio.netlify.app`

### Passo 5: Configurar Domínio Personalizado (Opcional)

1. No painel do site, vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite seu domínio (ex: `ivoxscale.com`)
4. Siga as instruções para configurar DNS
5. A Netlify fornecerá SSL gratuito automaticamente

## 💻 Método 2: Deploy via Netlify CLI

Para quem prefere linha de comando ou quer testar antes de fazer push.

### Passo 1: Instalar Netlify CLI

```bash
npm install -g netlify-cli
```

### Passo 2: Login

```bash
netlify login
```

Isso abrirá o navegador para autenticação.

### Passo 3: Inicializar Projeto

```bash
netlify init
```

Escolha:
- **"Create & configure a new site"**
- Escolha o team
- Digite o nome do site
- Confirme as configurações de build

### Passo 4: Deploy de Produção

```bash
netlify deploy --prod
```

## 🧪 Testar Localmente com Netlify Dev

Antes de fazer deploy, você pode testar localmente com as Netlify Functions:

```bash
# Instalar dependências
npm install

# Rodar com Netlify Dev (simula ambiente de produção)
netlify dev
```

Isso rodará:
- Frontend em `http://localhost:8888`
- API Functions em `http://localhost:8888/api/*`

## 🔧 Configurar Variáveis de Ambiente

Se você adicionar integrações (email, CRM, etc.), configure as variáveis:

1. No painel Netlify, vá em **"Site settings"** → **"Environment variables"**
2. Adicione suas variáveis:
   - `SENDGRID_API_KEY` (para emails)
   - `MAILCHIMP_API_KEY` (para newsletter)
   - Etc.

## 📊 Monitoramento e Logs

### Ver Logs de Deploy

1. Acesse **"Deploys"** no painel
2. Clique no deploy específico
3. Veja os logs completos

### Ver Logs de Functions

1. Acesse **"Functions"** no painel
2. Clique na function específica
3. Veja logs em tempo real

## 🔄 Deploy Automático

Com Git connected, cada push para a branch principal dispara um novo deploy:

```bash
git add .
git commit -m "Update feature X"
git push origin main
# Deploy automático iniciará!
```

### Preview Deploys

Pull requests criam deploy previews automáticos:
- Cada PR ganha uma URL única de preview
- Ideal para testar antes de mergear

## ⚡ Performance

A Netlify otimiza automaticamente:
- ✅ CDN global
- ✅ Compressão Gzip/Brotli
- ✅ HTTP/2
- ✅ Asset optimization
- ✅ SSL gratuito

## 🐛 Troubleshooting

### Build Falhou

Verifique:
1. Logs de build no painel Netlify
2. Se todas as dependências estão no `package.json`
3. Se o Node.js version match (definido em `.nvmrc`)

### Functions não funcionam

Verifique:
1. Se `netlify.toml` está configurado corretamente
2. Se `_redirects` está em `client/public/`
3. Logs da function no painel

### Site mostra 404

Verifique:
1. Se o publish directory é `dist`
2. Se o redirect SPA está configurado em `netlify.toml`

## 📱 Deploy Preview no Celular

Após o deploy, teste em dispositivos móveis:
1. Abra a URL do site no celular
2. Ou use ferramentas como BrowserStack

## 🎯 Próximos Passos

Após deploy bem-sucedido:

1. ✅ Configure domínio personalizado
2. ✅ Configure variáveis de ambiente para produção
3. ✅ Teste formulários em produção
4. ✅ Configure analytics (Netlify Analytics ou Google Analytics)
5. ✅ Configure notificações de deploy
6. ✅ Adicione badge de status no README

## 📚 Recursos Úteis

- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Netlify CLI Docs](https://docs.netlify.com/cli/get-started/)
- [Support Forum](https://answers.netlify.com/)

## ✨ Deploy Status Badge

Adicione ao README.md após deploy:

```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/SEU-SITE-ID/deploy-status)](https://app.netlify.com/sites/SEU-SITE/deploys)
```

Encontre seu ID em: **Site settings** → **General** → **Site information**

---

**Pronto!** Seu site Ivox Scale está no ar! 🎉
