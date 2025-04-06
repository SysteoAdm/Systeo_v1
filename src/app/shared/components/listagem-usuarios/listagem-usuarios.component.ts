import { Component, OnInit } from '@angular/core';

interface Usuario {
  nome: string;
  status: string;
  funcao: string;
  email: string;
  contato: string;
  certificados: number;
  criadoEm: string;
  ultimaAlteracao: string;
  ultimoAcesso: string;
}

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})

export class ListagemUsuariosComponent implements OnInit  {
  tabs: string[] = ['Usuários', 'Alocar Curso', 'Progresso', 'Ficha', 'Outro 1', 'Outro 2', 'Outro 3'];
  activeTab: string = 'Usuários';


    users = [
        { nome: 'Tiago Lima', status: 'online', funcao: 'admin', email: 'tiago@email.com', contato: '(21) 98765-4321', certificados: 5, criadoEm: '2024-01-10', ultimaAlteracao: '2024-02-15', ultimoAcesso: '2024-03-01' },
        { nome: 'Maria Oliveira', status: 'online', funcao: 'aluno-pv1', email: 'maria@email.com', contato: '(11) 91234-5678', certificados: 3, criadoEm: '2023-11-20', ultimaAlteracao: '2024-01-25', ultimoAcesso: '2024-02-28' },
        { nome: 'Carlos Souza', status: 'offline', funcao: 'aluno-pv1', email: 'carlos@email.com', contato: '(31) 99876-5432', certificados: 8, criadoEm: '2022-09-05', ultimaAlteracao: '2023-12-30', ultimoAcesso: '2024-01-20' },
        { nome: 'Fernanda Costa', status: 'online', funcao: 'aluno-pv2', email: 'fernanda@email.com', contato: '(61) 92345-6789', certificados: 6, criadoEm: '2023-06-15', ultimaAlteracao: '2023-11-10', ultimoAcesso: '2024-02-05' },
        { nome: 'Ricardo Almeida', status: 'offline', funcao: 'aluno-pv1', email: 'ricardo@email.com', contato: '(85) 93456-7890', certificados: 4, criadoEm: '2022-12-10', ultimaAlteracao: '2023-09-20', ultimoAcesso: '2024-01-30' },
        { nome: 'Juliana Martins', status: 'offline', funcao: 'aluno-pv2', email: 'juliana@email.com', contato: '(41) 94567-8901', certificados: 9, criadoEm: '2023-03-22', ultimaAlteracao: '2024-02-01', ultimoAcesso: '2024-02-28' },
        { nome: 'Bruno Ferreira', status: 'online', funcao: 'aluno-pv1', email: 'bruno@email.com', contato: '(71) 95678-9012', certificados: 2, criadoEm: '2021-08-30', ultimaAlteracao: '2023-07-15', ultimoAcesso: '2023-12-10' },
        { nome: 'Aline Rocha', status: 'online', funcao: 'aluno-pv1', email: 'aline@email.com', contato: '(51) 96789-0123', certificados: 7, criadoEm: '2023-05-18', ultimaAlteracao: '2024-01-10', ultimoAcesso: '2024-03-05' },
        { nome: 'Gustavo Nunes', status: 'offline', funcao: 'aluno-pv1', email: 'gustavo@email.com', contato: '(81) 97890-1234', certificados: 10, criadoEm: '2022-11-12', ultimaAlteracao: '2023-10-25', ultimoAcesso: '2024-02-20' },
        { nome: 'Paula Mendes', status: 'offline', funcao: 'aluno-pv1', email: 'paula@email.com', contato: '(91) 98901-2345', certificados: 1, criadoEm: '2024-02-05', ultimaAlteracao: '2024-02-10', ultimoAcesso: '2024-03-10' },
        { nome: 'Eduardo Ribeiro', status: 'offline', funcao: 'aluno-pv3', email: 'eduardo@email.com', contato: '(31) 99012-3456', certificados: 5, criadoEm: '2022-06-25', ultimaAlteracao: '2023-12-05', ultimoAcesso: '2024-01-15' },
        { nome: 'Camila Silva', status: 'online', funcao: 'aluno-pv2', email: 'camila@email.com', contato: '(11) 90123-4567', certificados: 6, criadoEm: '2023-07-20', ultimaAlteracao: '2024-02-12', ultimoAcesso: '2024-02-28' },
        { nome: 'Fábio Santos', status: 'offline', funcao: 'aluno-pv1', email: 'fabio@email.com', contato: '(21) 91234-5678', certificados: 4, criadoEm: '2021-09-10', ultimaAlteracao: '2023-08-15', ultimoAcesso: '2023-11-20' },
        { nome: 'Renata Carvalho', status: 'online', funcao: 'aluno-pv3', email: 'renata@email.com', contato: '(41) 92345-6789', certificados: 8, criadoEm: '2022-05-28', ultimaAlteracao: '2023-10-18', ultimoAcesso: '2024-03-02' },
        { nome: 'Marcelo Vieira', status: 'offline', funcao: 'aluno-pv1', email: 'marcelo@email.com', contato: '(51) 93456-7890', certificados: 3, criadoEm: '2023-04-12', ultimaAlteracao: '2023-12-15', ultimoAcesso: '2024-02-25' },
        { nome: 'Lucas Pereira', status: 'offline', funcao: 'aluno-pv1', email: 'user1@email.com', contato: '(72) 4827-1625', certificados: 3, criadoEm: '2021-06-18', ultimaAlteracao: '2024-01-02', ultimoAcesso: '2024-01-29' },
        { nome: 'Cauã Martins', status: 'offline', funcao: 'aluno-pv2', email: 'user2@email.com', contato: '(88) 3350-1416', certificados: 9, criadoEm: '2021-07-27', ultimaAlteracao: '2023-09-24', ultimoAcesso: '2024-03-18' },
        { nome: 'Henrique Nunes', status: 'online', funcao: 'aluno-pv1', email: 'user3@email.com', contato: '(83) 6602-1892', certificados: 6, criadoEm: '2021-07-10', ultimaAlteracao: '2023-12-14', ultimoAcesso: '2024-01-30' },
        { nome: 'Luiz Costa', status: 'offline', funcao: 'admin', email: 'user4@email.com', contato: '(86) 0483-5395', certificados: 2, criadoEm: '2021-11-02', ultimaAlteracao: '2023-06-06', ultimoAcesso: '2024-03-11' },
        { nome: 'Adriana Nunes', status: 'offline', funcao: 'aluno-pv1', email: 'user5@email.com', contato: '(85) 9446-7992', certificados: 3, criadoEm: '2021-07-06', ultimaAlteracao: '2023-11-24', ultimoAcesso: '2024-03-21' },
        { nome: 'Marcela Barros', status: 'online', funcao: 'aluno-pv2', email: 'user6@email.com', contato: '(35) 9444-4113', certificados: 2, criadoEm: '2022-08-03', ultimaAlteracao: '2023-05-01', ultimoAcesso: '2024-01-30' },
        { nome: 'Gustavo Melo', status: 'online', funcao: 'aluno-pv1', email: 'user7@email.com', contato: '(95) 4015-8137', certificados: 5, criadoEm: '2022-06-14', ultimaAlteracao: '2023-05-04', ultimoAcesso: '2024-04-02' },
        { nome: 'Marcos Fernandes', status: 'offline', funcao: 'aluno-pv1', email: 'user8@email.com', contato: '(71) 1173-1920', certificados: 6, criadoEm: '2022-04-30', ultimaAlteracao: '2023-11-23', ultimoAcesso: '2024-03-02' },
        { nome: 'Bruno Lima', status: 'online', funcao: 'aluno-pv3', email: 'user9@email.com', contato: '(37) 2326-2873', certificados: 9, criadoEm: '2021-08-21', ultimaAlteracao: '2023-11-18', ultimoAcesso: '2024-04-01' },
        { nome: 'Renata Pinto', status: 'offline', funcao: 'aluno-pv2', email: 'user10@email.com', contato: '(36) 8388-6451', certificados: 9, criadoEm: '2022-12-20', ultimaAlteracao: '2023-11-12', ultimoAcesso: '2024-02-08' },
        { nome: 'Tatiane Borges', status: 'online', funcao: 'aluno-pv2', email: 'user11@email.com', contato: '(62) 8399-1267', certificados: 7, criadoEm: '2022-03-15', ultimaAlteracao: '2023-12-03', ultimoAcesso: '2024-03-17' },
        { nome: 'Sérgio Azevedo', status: 'offline', funcao: 'aluno-pv3', email: 'user12@email.com', contato: '(43) 2199-8346', certificados: 4, criadoEm: '2021-10-25', ultimaAlteracao: '2023-07-11', ultimoAcesso: '2024-02-28' },
        { nome: 'Débora Lima', status: 'online', funcao: 'aluno-pv1', email: 'user13@email.com', contato: '(54) 3088-7775', certificados: 6, criadoEm: '2022-05-09', ultimaAlteracao: '2023-10-07', ultimoAcesso: '2024-03-25' },
        { nome: 'Vinícius Rocha', status: 'offline', funcao: 'admin', email: 'user14@email.com', contato: '(41) 9284-4650', certificados: 10, criadoEm: '2021-09-03', ultimaAlteracao: '2023-12-10', ultimoAcesso: '2024-02-15' },
        { nome: 'Larissa Ramos', status: 'online', funcao: 'aluno-pv1', email: 'user15@email.com', contato: '(85) 7401-3044', certificados: 8, criadoEm: '2022-07-12', ultimaAlteracao: '2024-01-01', ultimoAcesso: '2024-03-09' },
        { nome: 'Paulo Henrique', status: 'offline', funcao: 'aluno-pv3', email: 'user16@email.com', contato: '(11) 6125-9083', certificados: 1, criadoEm: '2021-11-21', ultimaAlteracao: '2023-06-18', ultimoAcesso: '2024-02-19' },
        { nome: 'Beatriz Costa', status: 'online', funcao: 'aluno-pv2', email: 'user17@email.com', contato: '(48) 3001-5023', certificados: 3, criadoEm: '2023-01-27', ultimaAlteracao: '2024-01-15', ultimoAcesso: '2024-03-05' },
        { nome: 'André Silva', status: 'offline', funcao: 'aluno-pv1', email: 'user18@email.com', contato: '(31) 7845-3266', certificados: 5, criadoEm: '2022-08-14', ultimaAlteracao: '2023-09-19', ultimoAcesso: '2024-03-13' },
        { nome: 'Patrícia Souza', status: 'online', funcao: 'aluno-pv1', email: 'user19@email.com', contato: '(32) 6710-4120', certificados: 7, criadoEm: '2021-12-08', ultimaAlteracao: '2023-12-27', ultimoAcesso: '2024-03-22' },
        { nome: 'Luciana Freitas', status: 'offline', funcao: 'aluno-pv3', email: 'user20@email.com', contato: '(21) 8002-3567', certificados: 9, criadoEm: '2022-11-03', ultimaAlteracao: '2023-07-30', ultimoAcesso: '2024-03-06' },
        { nome: 'José Ricardo', status: 'online', funcao: 'aluno-pv2', email: 'user21@email.com', contato: '(91) 9420-8820', certificados: 2, criadoEm: '2023-02-11', ultimaAlteracao: '2023-12-20', ultimoAcesso: '2024-04-01' },
        { nome: 'Amanda Teixeira', status: 'offline', funcao: 'aluno-pv1', email: 'user22@email.com', contato: '(61) 3102-9941', certificados: 6, criadoEm: '2022-10-19', ultimaAlteracao: '2023-11-03', ultimoAcesso: '2024-02-17' },
        { nome: 'Danilo Moura', status: 'offline', funcao: 'aluno-pv2', email: 'user23@email.com', contato: '(51) 7128-6829', certificados: 4, criadoEm: '2023-04-08', ultimaAlteracao: '2024-01-08', ultimoAcesso: '2024-03-29' },
        { nome: 'Natália Alves', status: 'online', funcao: 'aluno-pv3', email: 'user24@email.com', contato: '(24) 5013-2044', certificados: 10, criadoEm: '2021-07-19', ultimaAlteracao: '2023-08-12', ultimoAcesso: '2024-02-23' },
        { nome: 'Rafael Matos', status: 'offline', funcao: 'admin', email: 'user25@email.com', contato: '(11) 8000-1123', certificados: 7, criadoEm: '2022-01-02', ultimaAlteracao: '2023-06-28', ultimoAcesso: '2024-01-17' },
        { nome: 'Viviane Campos', status: 'online', funcao: 'aluno-pv2', email: 'user26@email.com', contato: '(35) 3333-4404', certificados: 3, criadoEm: '2022-06-06', ultimaAlteracao: '2023-10-20', ultimoAcesso: '2024-03-03' },
        { nome: 'Cristiano Silva', status: 'offline', funcao: 'aluno-pv1', email: 'user27@email.com', contato: '(85) 7878-9090', certificados: 5, criadoEm: '2023-03-30', ultimaAlteracao: '2024-01-28', ultimoAcesso: '2024-03-19' },
        { nome: 'Tatiane Monteiro', status: 'online', funcao: 'aluno-pv3', email: 'user28@email.com', contato: '(19) 6262-1717', certificados: 4, criadoEm: '2021-05-17', ultimaAlteracao: '2023-07-21', ultimoAcesso: '2024-03-08' },
        { nome: 'Alex Barbosa', status: 'offline', funcao: 'aluno-pv1', email: 'user29@email.com', contato: '(62) 9999-0000', certificados: 2, criadoEm: '2022-02-23', ultimaAlteracao: '2023-11-25', ultimoAcesso: '2024-01-29' },
        { nome: 'Elaine Queiroz', status: 'online', funcao: 'aluno-pv2', email: 'user30@email.com', contato: '(71) 1111-2222', certificados: 8, criadoEm: '2022-12-10', ultimaAlteracao: '2024-02-05', ultimoAcesso: '2024-04-04' },
        { nome: 'Caio Antunes', status: 'online', funcao: 'aluno-pv1', email: 'user31@email.com', contato: '(98) 3333-4444', certificados: 6, criadoEm: '2022-11-01', ultimaAlteracao: '2024-01-09', ultimoAcesso: '2024-03-30' },
        { nome: 'Eliane Rocha', status: 'offline', funcao: 'aluno-pv3', email: 'user32@email.com', contato: '(44) 5555-6666', certificados: 1, criadoEm: '2022-10-20', ultimaAlteracao: '2023-12-01', ultimoAcesso: '2024-03-01' },
        { nome: 'Vitor Fonseca', status: 'online', funcao: 'aluno-pv1', email: 'user33@email.com', contato: '(45) 7777-8888', certificados: 5, criadoEm: '2023-01-13', ultimaAlteracao: '2024-02-17', ultimoAcesso: '2024-03-10' },
        { nome: 'Simone Duarte', status: 'offline', funcao: 'aluno-pv2', email: 'user34@email.com', contato: '(46) 9999-1212', certificados: 4, criadoEm: '2023-02-21', ultimaAlteracao: '2024-03-01', ultimoAcesso: '2024-03-27' },
        { nome: 'Roberto Martins', status: 'online', funcao: 'admin', email: 'user35@email.com', contato: '(47) 3131-1414', certificados: 7, criadoEm: '2021-09-07', ultimaAlteracao: '2023-08-22', ultimoAcesso: '2024-02-20' },
        { nome: 'Joana Paiva', status: 'offline', funcao: 'aluno-pv1', email: 'user36@email.com', contato: '(49) 6262-3636', certificados: 2, criadoEm: '2022-03-03', ultimaAlteracao: '2023-07-09', ultimoAcesso: '2024-01-25' },
        { nome: 'Pedro Cardoso', status: 'online', funcao: 'aluno-pv2', email: 'user37@email.com', contato: '(53) 4343-5656', certificados: 9, criadoEm: '2021-08-18', ultimaAlteracao: '2023-12-04', ultimoAcesso: '2024-02-14' },
        { nome: 'Gabriela Cunha', status: 'offline', funcao: 'aluno-pv3', email: 'user38@email.com', contato: '(52) 5858-7878', certificados: 3, criadoEm: '2022-05-26', ultimaAlteracao: '2023-09-15', ultimoAcesso: '2024-03-07' },
        { nome: 'Luciano Ribeiro', status: 'online', funcao: 'aluno-pv1', email: 'user39@email.com', contato: '(56) 6060-8080', certificados: 6, criadoEm: '2023-04-14', ultimaAlteracao: '2024-02-20', ultimoAcesso: '2024-03-28' },
        { nome: 'Isabela Meireles', status: 'offline', funcao: 'aluno-pv2', email: 'user40@email.com', contato: '(57) 7272-9090', certificados: 1, criadoEm: '2022-09-30', ultimaAlteracao: '2023-10-10', ultimoAcesso: '2024-01-21' }
      ];

      filter: Partial<Usuario> = {
        nome: '',
        funcao: '',
        email: '',
        contato: '',
        certificados: undefined,
        criadoEm: '',
        ultimaAlteracao: '',
        ultimoAcesso: ''
      };


      filteredUsers: Usuario[] = this.users;
      editingIndex: number | null = null;
      editedUser: Usuario = {} as Usuario;
      hasChanges = false;

      currentPage = 1;
      itemsPerPage = 5;
      totalPages = 1;

      ngOnInit() {
        this.updatePagination();
      }

      updatePagination() {
        this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
        if (this.currentPage > this.totalPages) this.currentPage = this.totalPages || 1;
      }

      paginatedUsers() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.filteredUsers.slice(start, end);
      }

      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      }

      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }

      filtrarUsuarios() {
        this.filteredUsers = this.users.filter(user => {
          return (
            (!this.filter.nome || user.nome.toLowerCase().includes(this.filter.nome.toLowerCase())) &&
            (!this.filter.funcao || user.funcao === this.filter.funcao) &&
            (!this.filter.email || user.email.toLowerCase().includes(this.filter.email.toLowerCase())) &&
            (!this.filter.contato || user.contato.includes(this.filter.contato)) &&
            (!this.filter.certificados || user.certificados === +this.filter.certificados) &&
            (!this.filter.criadoEm || user.criadoEm === this.filter.criadoEm) &&
            (!this.filter.ultimaAlteracao || user.ultimaAlteracao === this.filter.ultimaAlteracao) &&
            (!this.filter.ultimoAcesso || user.ultimoAcesso === this.filter.ultimoAcesso)
          );
        });
        this.currentPage = 1;
        this.updatePagination();
      }

      limparCampos() {
        this.filter = {
          nome: '',
          funcao: '',
          email: '',
          contato: '',
          certificados: undefined,
          criadoEm: '',
          ultimaAlteracao: '',
          ultimoAcesso: ''
        };
        this.filteredUsers = [...this.users];
        this.currentPage = 1;
        this.updatePagination();
      }


      editarUsuario(user: Usuario, index: number) {
        this.editingIndex = index;
        this.editedUser = { ...user };
      }

      atualizarCampo<K extends keyof Usuario>(campo: K, valor: Usuario[K]) {
        if (this.editingIndex !== null) {
          this.filteredUsers[this.editingIndex][campo] = valor;
          this.hasChanges = true;
        }
      }

      salvarEdicao() {
        this.editingIndex = null;
        this.hasChanges = false;
      }

      excluirUsuario(user: Usuario) {
        this.users = this.users.filter(u => u !== user);
        this.filtrarUsuarios();
      }

      desbloquearUsuario(user: Usuario) {
        // lógica de desbloqueio
      }
}
