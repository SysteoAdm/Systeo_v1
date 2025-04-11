import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-criar-novo-usuario',
  templateUrl: './criar-novo-usuario.component.html',
  styleUrls: ['./criar-novo-usuario.component.css']
})
export class CriarNovoUsuarioComponent {

  usuario: User = {
    nome: '',
    cpf: '',
    email: '',
    celular: '',
    profissao: '',
    dataNascimento: '',
    sexo: '',
    estadoCivil: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    membroIgrejaDoRecreio: '',
    cristao: '',
    eBatizado: '',
    dataBatismo: '',
    cidadeBatismo: '',
    igrejaBatismo: '',
    pastorBatismo: '',
    senha: '',
    confirmarSenha: '',
    aceitouTermos: false,
  };

  constructor(
      private authService : AuthService,
      private router : Router) { }
  
  
  mostrarCamposBatismo = false;


  // Dentro do seu componente.ts
  batizadoSelecionado: string = '';

 //se for batizado, vai mostrar mais campos no formulário:
  onBatismoChange() {
    this.mostrarCamposBatismo = this.usuario.eBatizado === 'sim';
  }

  onRegister() : void {

        this.authService.register(this.usuario)
        .subscribe({
          next : (response) => {
            this.router.navigate(['/login'])
          },
          error: (err) =>console.log('Erro no registro do usuário : ' + err ),
        })
  }
}




