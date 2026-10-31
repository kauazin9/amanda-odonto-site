# Ama Odonto — site (demonstração de redesign)

Site estático (HTML + CSS + JavaScript puro). **Não precisa de build nem de dependências.**

## Estrutura
```
index.html              página única
favicon.png             ícone do navegador
assets/css/style.css    estilos
assets/js/main.js       animações e interações
assets/img/             fotografias e símbolo da marca
vercel.json             cache e cabeçalhos de segurança
robots.txt, package.json
```

## Publicar na Vercel
1. Envie esta pasta para um repositório (GitHub, GitLab ou Bitbucket) e importe em vercel.com/new, **ou** use a CLI: `npx vercel` dentro da pasta.
2. Framework Preset: **Other**. Build Command: vazio. Output Directory: vazio (raiz do projeto).
3. Clique em Deploy.

## Testar no computador
`npx serve .` (ou `python3 -m http.server 8000`) e abra http://localhost:8000.
Abrir o index.html direto por duplo clique pode falhar na máscara do símbolo dos botões; use um servidor local.

## Antes de divulgar (ajustes opcionais)
- `index.html`: o site está com `noindex` (demonstração, sem aprovação da clínica). Remova a meta `robots` e o `robots.txt` quando for o site oficial. Depois, acrescente `og:image` com a URL completa de uma foto.
- `assets/js/main.js`: `AGENDA_URL` recebe o endereço do sistema de agendamento atual da clínica (aparece o botão "Sistema de agendamento").
- Fontes (Instrument Serif e Hanken Grotesk) vêm do Google Fonts. Para hospedar localmente, baixe os arquivos e troque o `<link>` no `index.html`.
- O mapa usa o embed público do Google Maps; funciona em qualquer domínio.
- As animações ficam ligadas por padrão; o botão no rodapé permite desligá-las (preferência salva no navegador).
