import { Usuario } from '../models/usuario.model';
export const USUARIOS: Usuario[] = [
  {
    id: 1,
    nome: 'Tiago Lima',
    status: 'online',
    funcao: 'admin',
    email: 'tiago@email.com',
    contato: '(21) 98765-4321',
    criadoEm: '2024-01-10',
    ultimaAlteracao: '2024-02-15',
    ultimoAcesso: '2024-03-01',
    certificados: 3,
    membresia: true,
    batizado: true,
    cristao: true,
    sexo: 'Masculino',
    statusCivil: 'Casado',
    cursosMatriculados: [
      {
        nome: 'Membresia',
        statusCurso: 'formado',
        conformidade: 'Obrigatório',
        requisito: 'Nenhum',
        inicio: '2024-01-01',
        conclusao: '2024-03-01',
        tempoMinimo: '60 dias'
      },
      {
        nome: 'Batismo',
        statusCurso: 'formado',
        conformidade: 'Obrigatório',
        requisito: 'Nenhum',
        inicio: '2024-01-01',
        conclusao: '2024-03-01',
        tempoMinimo: '60 dias'
      },
      {
        nome: 'Liderança 1',
        statusCurso: 'formado',
        conformidade: 'Obrigatório',
        requisito: 'Nenhum',
        inicio: '2024-01-01',
        conclusao: '2024-03-01',
        tempoMinimo: '60 dias'
      }
    ]
  },
  {
    id: 2,
    nome: 'Juliana Alves',
    status: 'offline',
    funcao: 'aluno',
    email: 'juliana@email.com',
    contato: '(11) 92345-6789',
    criadoEm: '2024-02-05',
    ultimaAlteracao: '2024-03-10',
    ultimoAcesso: '2024-03-25',
    certificados: 2,
    membresia: true,
    batizado: true,
    cristao: true,
    sexo: 'Feminino',
    statusCivil: 'Solteiro',
    cursosMatriculados: [
      {
        nome: 'Membresia',
        statusCurso: 'cursando',
        conformidade: 'Obrigatório',
        requisito: 'Nenhum',
        inicio: '2024-02-01',
        conclusao: '',
        tempoMinimo: '60 dias'
      },
      {
        nome: 'Batismo',
        statusCurso: 'pendente',
        conformidade: 'Obrigatório',
        requisito: 'Nenhum',
        inicio: '',
        conclusao: '',
        tempoMinimo: '60 dias'
      },
      {
        nome: 'Novo Testamento',
        statusCurso: 'cursando',
        conformidade: 'Facultativo',
        requisito: 'Nenhum',
        inicio: '2024-02-15',
        conclusao: '',
        tempoMinimo: '60 dias'
      }
    ]
  },
  {
    id: 3,
    nome: 'Carlos Eduardo',
    status: 'online',
    funcao: 'líder',
    email: 'carlos@email.com',
    contato: '(31) 93456-7890',
    criadoEm: '2023-11-20',
    ultimaAlteracao: '2024-01-10',
    ultimoAcesso: '2024-02-20',
    certificados: 4,
    membresia: true,
    batizado: true,
    cristao: true,
    sexo: 'Masculino',
    statusCivil: 'Casado',
    cursosMatriculados: [
      {
        nome: 'Liderança 1',
        statusCurso: 'formado',
        conformidade: 'Obrigatório',
        requisito: 'Nenhum',
        inicio: '2023-10-01',
        conclusao: '2024-01-01',
        tempoMinimo: '60 dias'
      },
      {
        nome: 'Liderança 2',
        statusCurso: 'cursando',
        conformidade: 'Obrigatório após o 1',
        requisito: 'Liderança 1',
        inicio: '2024-02-01',
        conclusao: '',
        tempoMinimo: '90 dias'
      },
      {
        nome: 'Evangelismo',
        statusCurso: 'cursando',
        conformidade: 'Facultativo',
        requisito: 'Ser Membro',
        inicio: '2024-02-10',
        conclusao: '',
        tempoMinimo: '180 dias'
      },
      {
        nome: 'Casados Pra Sempre',
        statusCurso: 'formado',
        conformidade: 'Facultativo',
        requisito: 'Ser Casado',
        inicio: '2023-09-01',
        conclusao: '2023-12-01',
        tempoMinimo: '90 dias'
      }
    ]
  },
  {
    id: 4,
    nome: 'Ana Beatriz',
    status: 'online',
    funcao: 'aluno',
    email: 'ana@email.com',
    contato: '(41) 94567-8901',
    criadoEm: '2024-03-01',
    ultimaAlteracao: '2024-03-20',
    ultimoAcesso: '2024-03-30',
    certificados: 1,
    membresia: false,
    batizado: false,
    cristao: true,
    sexo: 'Feminino',
    statusCivil: 'Solteiro',
    cursosMatriculados: [
      {
        nome: 'Velho Testamento',
        statusCurso: 'cursando',
        conformidade: 'Facultativo',
        requisito: 'Nenhum',
        inicio: '2024-03-01',
        conclusao: '',
        tempoMinimo: '60 dias'
      },
      {
        nome: 'Novo Testamento',
        statusCurso: 'pendente',
        conformidade: 'Facultativo',
        requisito: 'Nenhum',
        inicio: '',
        conclusao: '',
        tempoMinimo: '60 dias'
      },
      {
        nome: 'Evangelismo',
        statusCurso: 'pendente',
        conformidade: 'Facultativo',
        requisito: 'Ser Membro',
        inicio: '',
        conclusao: '',
        tempoMinimo: '180 dias'
      }
    ]
  }
];
