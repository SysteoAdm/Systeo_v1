import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-criar-novo-usuario',
  templateUrl: './criar-novo-usuario.component.html',
  styleUrls: ['./criar-novo-usuario.component.css']
})
export class CriarNovoUsuarioComponent {
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


  onBatismoChange() {
    this.mostrarCamposBatismo = this.usuario.eBatizado === 'sim';
  }




}




