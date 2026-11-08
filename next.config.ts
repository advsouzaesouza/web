import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 é o padrão do Next; 95 é a qualidade das fotos do site — o cliente
    // pediu fotos em qualidade máxima, sem compressão visível.
    qualities: [75, 95],
  },
  async redirects() {
    return [
      // URLs do site antigo em WordPress que mudaram de nome. As que têm o
      // mesmo caminho (/sobre-nos, /servicos, /profissionais, /contato) já
      // caem direto na página nova.
      { source: "/servicos-2", destination: "/servicos", permanent: true },
      { source: "/associadas", destination: "/profissionais", permanent: true },
      { source: "/equipe", destination: "/profissionais", permanent: false },

      // O site viveu em /site durante a revisão. Links antigos para as
      // páginas caem na raiz. Só as páginas: as fotos continuam servidas de
      // /public/site/… e não podem ser redirecionadas.
      { source: "/site", destination: "/", permanent: false },
      {
        source: "/site/:pagina(sobre-nos|profissionais|servicos|contato)",
        destination: "/:pagina",
        permanent: false,
      },

      // Versões descartadas pelo cliente (guardadas em `_ocultas/`, sem rota).
      {
        source: "/:pagina(sobre-nos|profissionais|servicos|contato)/:versao(v2|v3)",
        destination: "/:pagina",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
