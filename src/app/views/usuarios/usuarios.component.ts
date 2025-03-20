import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  users = [
    { nome: 'Tiago Lima', email: 'tiago@email.com', contato: '(21) 98765-4321', status: 'online', certificados: 5, criadoEm: '2024-01-10', ultimaAlteracao: '2024-02-15', ultimoAcesso: '2024-03-01' },
    { nome: 'Maria Oliveira', email: 'maria@email.com', contato: '(11) 91234-5678', status: 'online', certificados: 3, criadoEm: '2023-11-20', ultimaAlteracao: '2024-01-25', ultimoAcesso: '2024-02-28' },
    { nome: 'Carlos Souza', email: 'carlos@email.com', contato: '(31) 99876-5432', status: 'offline', certificados: 8, criadoEm: '2022-09-05', ultimaAlteracao: '2023-12-30', ultimoAcesso: '2024-01-20' },
    { nome: 'Fernanda Costa', email: 'fernanda@email.com', contato: '(61) 92345-6789', status: 'online', certificados: 6, criadoEm: '2023-06-15', ultimaAlteracao: '2023-11-10', ultimoAcesso: '2024-02-05' },
    { nome: 'Ricardo Almeida', email: 'ricardo@email.com', contato: '(85) 93456-7890', status: 'offline', certificados: 4, criadoEm: '2022-12-10', ultimaAlteracao: '2023-09-20', ultimoAcesso: '2024-01-30' },
    { nome: 'Juliana Martins', email: 'juliana@email.com', contato: '(41) 94567-8901', status: 'offline', certificados: 9, criadoEm: '2023-03-22', ultimaAlteracao: '2024-02-01', ultimoAcesso: '2024-02-28' },
    { nome: 'Bruno Ferreira', email: 'bruno@email.com', contato: '(71) 95678-9012', status: 'online', certificados: 2, criadoEm: '2021-08-30', ultimaAlteracao: '2023-07-15', ultimoAcesso: '2023-12-10' },
    { nome: 'Aline Rocha', email: 'aline@email.com', contato: '(51) 96789-0123', status: 'online', certificados: 7, criadoEm: '2023-05-18', ultimaAlteracao: '2024-01-10', ultimoAcesso: '2024-03-05' },
    { nome: 'Gustavo Nunes', email: 'gustavo@email.com', contato: '(81) 97890-1234', status: 'offline', certificados: 10, criadoEm: '2022-11-12', ultimaAlteracao: '2023-10-25', ultimoAcesso: '2024-02-20' },
    { nome: 'Paula Mendes', email: 'paula@email.com', contato: '(91) 98901-2345', status: 'offline', certificados: 1, criadoEm: '2024-02-05', ultimaAlteracao: '2024-02-10', ultimoAcesso: '2024-03-10' },
    { nome: 'Eduardo Ribeiro', email: 'eduardo@email.com', contato: '(31) 99012-3456', status: 'offline', certificados: 5, criadoEm: '2022-06-25', ultimaAlteracao: '2023-12-05', ultimoAcesso: '2024-01-15' },
    { nome: 'Camila Silva', email: 'camila@email.com', contato: '(11) 90123-4567', status: 'online', certificados: 6, criadoEm: '2023-07-20', ultimaAlteracao: '2024-02-12', ultimoAcesso: '2024-02-28' },
    { nome: 'Fábio Santos', email: 'fabio@email.com', contato: '(21) 91234-5678', status: 'offline', certificados: 4, criadoEm: '2021-09-10', ultimaAlteracao: '2023-08-15', ultimoAcesso: '2023-11-20' },
    { nome: 'Renata Carvalho', email: 'renata@email.com', contato: '(41) 92345-6789', status: 'online', certificados: 8, criadoEm: '2022-05-28', ultimaAlteracao: '2023-10-18', ultimoAcesso: '2024-03-02' },
    { nome: 'Marcelo Vieira', email: 'marcelo@email.com', contato: '(51) 93456-7890', status: 'offline', certificados: 3, criadoEm: '2023-04-12', ultimaAlteracao: '2023-12-15', ultimoAcesso: '2024-02-25' }
  ];

  filter = {
    nome: '',
    email: '',
    contato: '',
    status: '',
    certificados: '',
    criadoEm: '',
    ultimaAlteracao: '',
    ultimoAcesso: ''
  };

  filteredUsers = [...this.users];

  filtrarUsuarios() {
    this.filteredUsers = this.users.filter(user => {
      return (this.filter.nome ? user.nome.toLowerCase().includes(this.filter.nome.toLowerCase()) : true)
        && (this.filter.email ? user.email.toLowerCase().includes(this.filter.email.toLowerCase()) : true)
        && (this.filter.contato ? user.contato.includes(this.filter.contato) : true)
        && (this.filter.status ? user.status === this.filter.status : true)
        && (this.filter.certificados ? user.certificados.toString().includes(this.filter.certificados) : true)
        && (this.filter.criadoEm ? user.criadoEm === this.filter.criadoEm : true)
        && (this.filter.ultimaAlteracao ? user.ultimaAlteracao === this.filter.ultimaAlteracao : true)
        && (this.filter.ultimoAcesso ? user.ultimoAcesso === this.filter.ultimoAcesso : true);
    });
  }

  limparCampos() {
    // Limpa todos os campos de filtro
    this.filter = {
      nome: '',
      email: '',
      contato: '',
      status: '',
      certificados: '',
      criadoEm: '',
      ultimaAlteracao: '',
      ultimoAcesso: ''
    };
    // Restaura o filtro para mostrar todos os usuários
    this.filteredUsers = [...this.users];
  }

  editarUsuario(user: any) {
    // Lógica para editar o usuário
  }

  excluirUsuario(user: any) {
    // Lógica para excluir o usuário
  }

  bloquearUsuario(user: any) {
    // Lógica para bloquear o usuário
  }

  desbloquearUsuario(user: any) {
    // Lógica para desbloquear o usuário
  }
}
