# Guia de Deploy no Netlify

## ✅ Configurações Atualizadas

Todos os arquivos foram ajustados para deploy no Netlify:

- ✅ `netlify.toml` - Configurado para publicar `dist/public`
- ✅ `.nvmrc` - Atualizado para Node.js 20
- ✅ Funções serverless em `netlify/functions/api.ts`
- ✅ Build testado e funcionando

## 🚀 Como Fazer Deploy

### Opção 1: Deploy via Git (Recomendado)

1. **Conecte seu repositório ao Netlify:**
   - Acesse [netlify.com](https://netlify.com) e faça login
   - Clique em "Add new site" → "Import an existing project"
   - Conecte seu repositório do GitHub/GitLab/Bitbucket
   - Selecione este repositório

2. **Configuração automática:**
   - O Netlify detectará automaticamente as configurações do `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Functions directory: `netlify/functions`

3. **Deploy:**
   - Clique em "Deploy site"
   - Aguarde o build completar
   - Seu site estará no ar! 🎉

### Opção 2: Deploy via Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Inicializar projeto
netlify init

# Deploy de produção
netlify deploy --prod
```

## 🔧 Configurações Importantes

### Node.js
- Versão: **20** (definida em `.nvmrc` e `netlify.toml`)

### Diretórios
- **Build**: `dist/public`
- **Functions**: `netlify/functions`
- **Redirects**: Configurados para SPA e API

### API Endpoints

As seguintes rotas de API estarão disponíveis:

- `POST /api/contact` - Formulário de contato
- `POST /api/newsletter` - Inscrição newsletter
- `GET /api/health` - Health check

## 📝 Próximos Passos Após Deploy

1. **Verificar site ao vivo:**
   - Acesse a URL fornecida pelo Netlify
   - Teste navegação entre páginas
   - Verifique se animações e estilos estão corretos

2. **Testar API endpoints:**
   - Teste o formulário de contato
   - Teste a inscrição de newsletter
   - Verifique `/api/health` no navegador

3. **Configurar domínio customizado (opcional):**
   - Vá em "Domain settings" no painel do Netlify
   - Adicione seu domínio personalizado
   - Configure os DNS conforme instruções

4. **Variáveis de ambiente (se necessário):**
   - Acesse "Site settings" → "Environment variables"
   - Adicione chaves de API (SendGrid, Mailchimp, etc.)

## 🎯 Dicas

- Deploy automático: Cada push na branch principal fará deploy automático
- Preview deploys: Pull requests geram previews automáticos
- Rollback: Use o painel do Netlify para voltar a versões anteriores
- Logs: Monitore os logs das funções serverless no painel

## 📚 Documentação

- [Netlify Docs](https://docs.netlify.com)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Deploy Previews](https://docs.netlify.com/site-deploys/deploy-previews/)
