"use client";

import { usePathname } from "next/navigation";

/**
 * Caminho atual do site — item ativo do menu, botão flutuante e mapa do
 * rodapé leem daqui. Concentrado num hook para que uma mudança de base das
 * rotas (como a ida do site de /site para a raiz) se resolva num lugar só.
 */
export function useCaminhoSite() {
  return usePathname();
}
