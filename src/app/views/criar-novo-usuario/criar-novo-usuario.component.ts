import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders  } from "@angular/common/http";
@Component({
  selector: 'app-criar-novo-usuario',
  templateUrl: './criar-novo-usuario.component.html',
  styleUrls: ['./criar-novo-usuario.component.css']
})
export class CriarNovoUsuarioComponent {


  constructor(
      private httpClient : HttpClient,
      private router : Router) { }

  usuario = {
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
    aceitouTermos: false
  };

  mostrarCamposBatismo = false;



  // Dentro do seu componente.ts
batizadoSelecionado: string = '';

 //se for batizado, vai mostrar mais campos no formulário:
  onBatismoChange() {
    this.mostrarCamposBatismo = this.usuario.eBatizado === 'sim';
  }

  onRegister() : void {

        this.httpClient.post('http://localhost:8000/user/register', this.usuario)
        // .pipe(
        //   takeUntil() //para se desinscrever e evitar vazamento de memoria
        // )
        .subscribe({
          next : (response) => {
            this.router.navigate(['/login'])
          },
          error: (err) =>console.log('deu ruim' ),
        })
  }
}




