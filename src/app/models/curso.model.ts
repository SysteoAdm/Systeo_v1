export interface Curso {
  id: number;
  nome: string;
  conformidade: string;
  requisito: string;
  fluxoStatus: 'ativo' | 'inativo';
  duracao: string;
  avaliacao: boolean;
  certificado: boolean;
  custo: string;
  dataEstreia: string;
  tempoMinimo: string;
  urls: string[];
}
