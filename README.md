# Souza & Souza Advocacia — site institucional

Site da Souza & Souza Advocacia e Assessoria Jurídica (Catalão/GO) e o design
system da marca.

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Home |
| `/sobre-nos` | Sobre nós |
| `/profissionais` | Profissionais |
| `/servicos` | Serviços (áreas de atuação) |
| `/contato` | Entre em contato |
| `/styleguide` | Design system: tokens, logotipo, cores, tipografia e componentes |

As páginas do site ficam no grupo `src/app/(site)/`, que tem layout próprio
(sempre no tema escuro). Versões de página descartadas pelo cliente estão
guardadas em pastas `_ocultas/`, que o Next ignora no roteamento.

## Desenvolvimento

```bash
npm install
npm run dev
```

Next.js 16 (App Router), React 19, Tailwind CSS 4 e componentes shadcn/ui
tokenizados para a marca em `src/components/ui/`.

## Deploy

Cada push na branch `main` gera o deploy de produção na Vercel.
