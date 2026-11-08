/**
 * Navegação da variação 5.
 *
 * Rótulos e ordem seguem o documento do cliente de 02/SET/2026: Home, Sobre
 * nós, Profissionais, Serviços e Entre em contato. Todo item aponta para uma
 * página real.
 */
export interface ItemNav {
  rotulo: string;
  href: string;
}

export const navegacao: ItemNav[] = [
  { rotulo: "Home", href: "/" },
  { rotulo: "Sobre nós", href: "/sobre-nos" },
  { rotulo: "Profissionais", href: "/profissionais" },
  { rotulo: "Serviços", href: "/servicos" },
  { rotulo: "Entre em contato", href: "/contato" },
];
