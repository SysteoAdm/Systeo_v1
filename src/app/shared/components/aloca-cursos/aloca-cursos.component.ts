import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CURSOS } from 'src/app/mocks/mock-cursos';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-aloca-cursos',
  templateUrl: './aloca-cursos.component.html',
  styleUrls: ['./aloca-cursos.component.css']
})
export class AlocaCursosComponent implements OnInit {
  busca = '';
  sugestoes: Usuario[] = [];
  usuarioSelecionado: Usuario | null = null;

  usuarios: Usuario[] = [];
  cursosDisponiveis = CURSOS;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  filtrarUsuarios() {
    const termo = this.busca.toLowerCase();
    this.sugestoes = this.usuarios.filter((u: Usuario) =>
      u.nome.toLowerCase().includes(termo) || u.email.toLowerCase().includes(termo)
    );
  }

  selecionarUsuario() {
    this.usuarioService.getUsuarioPorNomeOuEmail(this.busca).subscribe(usuario => {
      this.usuarioSelecionado = usuario;
    });
  }

  alocarCurso(curso: Curso) {
    if (this.usuarioSelecionado && !this.estaMatriculado(curso)) {
      this.usuarioSelecionado.cursosMatriculados.push({
        nome: curso.nome,
        statusCurso: 'pendente',
        conformidade: curso.conformidade,
        requisito: curso.requisito || 'Nenhum',
        inicio: new Date().toISOString().split('T')[0],
        tempoMinimo: curso.tempoMinimo
      });
      this.salvarUsuario();
    }
  }

  pausarCurso(curso: any) {
    curso.statusCurso = 'pausado';
    this.salvarUsuario();
  }

  desalocarCurso(curso: any) {
    if (this.usuarioSelecionado) {
      this.usuarioSelecionado.cursosMatriculados = this.usuarioSelecionado.cursosMatriculados
        .filter(c => c.nome !== curso.nome);
      this.salvarUsuario();
    }
  }

  salvarUsuario() {
    if (this.usuarioSelecionado) {
      this.usuarioService.atualizarUsuario(this.usuarioSelecionado).subscribe(() => {
        // Optionally exibir toast ou mensagem de sucesso
      });
    }
  }

  estaMatriculado(curso: Curso): boolean {
    return this.usuarioSelecionado?.cursosMatriculados.some(c => c.nome === curso.nome) || false;
  }
}
