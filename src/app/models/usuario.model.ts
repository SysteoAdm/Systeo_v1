export interface CursoMatriculado {
  nome: string;
  statusCurso: 'pendente' | 'cursando' | 'formado' | 'pausado' | 'disponível';
  conformidade: string;
  requisito: string;
  inicio: string;
  conclusao?: string;
  tempoMinimo: string;
}

export interface Usuario {
  id: number;
  nome: string;
  status: 'online' | 'offline';
  funcao: string;
  email: string;
  contato: string;
  criadoEm: string;
  ultimaAlteracao: string;
  ultimoAcesso: string;
  certificados: number;
  membresia: boolean;
  batizado: boolean;
  cristao: boolean;
  sexo: 'Masculino' | 'Feminino';
  statusCivil: 'Solteiro' | 'Noivo' | 'Casado' | 'Divorciado' | 'Viúvo';
  cursosMatriculados: CursoMatriculado[];
}
