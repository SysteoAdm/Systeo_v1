import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { USUARIOS } from '../mocks/mock-usuarios';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[] = USUARIOS;

  getUsuarios(): Observable<Usuario[]> {
    return of(this.usuarios);
  }

  getUsuarioPorNomeOuEmail(valor: string): Observable<Usuario | null> {
    const usuario = this.usuarios.find(u => u.nome === valor || u.email === valor);
    return of(usuario || null);
  }

  atualizarUsuario(usuarioAtualizado: Usuario): Observable<Usuario> {
    const index = this.usuarios.findIndex(u => u.email === usuarioAtualizado.email);
    if (index !== -1) {
      this.usuarios[index] = usuarioAtualizado;
    }
    return of(usuarioAtualizado);
  }
}
