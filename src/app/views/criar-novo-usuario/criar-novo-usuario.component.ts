import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-criar-novo-usuario',
  templateUrl: './criar-novo-usuario.component.html',
  styleUrls: ['./criar-novo-usuario.component.css']
})
export class CriarNovoUsuarioComponent implements OnInit {
  usuarioForm!: FormGroup;
  mostrarCamposBatismo = false;

  campos = [
    [
      { id: 'nome', label: 'Nome', tipo: 'text' },
      { id: 'profissao', label: 'Profissão', tipo: 'text' }
    ],
    [
      { id: 'email', label: 'E-mail', tipo: 'email' },
      { id: 'senha', label: 'Senha', tipo: 'password' }
    ],
    [
      { id: 'confirmarSenha', label: 'Confirmar Senha', tipo: 'password' },
      { id: 'dataNascimento', label: 'Data de nascimento', tipo: 'date' }
    ],
    [
      {
        id: 'sexo', label: 'Gênero', tipo: 'select',
        placeholder: 'Selecione',
        opcoes: ['Masculino', 'Feminino']
      },
      { id: 'celular', label: 'Celular', tipo: 'tel' }
    ],
    [
      { id: 'cpf', label: 'CPF', tipo: 'text' },
      { id: 'rua', label: 'Rua', tipo: 'text' }
    ],
    [
      { id: 'cidade', label: 'Cidade', tipo: 'text' },
      { id: 'estado', label: 'Estado', tipo: 'text' }
    ],
    [
      { id: 'cep', label: 'CEP', tipo: 'text' },
      {
        id: 'cristao', label: 'Você é cristão?', tipo: 'select',
        placeholder: 'Selecione', opcoes: ['sim', 'nao']
      }
    ],
    [
      {
        id: 'membroIgrejaDoRecreio', label: 'Você é membro da Igreja do Recreio', tipo: 'select',
        placeholder: 'Selecione', opcoes: ['sim', 'nao']
      }
    ],
    [
      {
        id: 'eBatizado', label: 'É batizado?', tipo: 'select',
        placeholder: 'Selecione', opcoes: ['sim', 'nao']
      },
      { id: 'bairro', label: 'Bairro', tipo: 'text' }
    ]
  ];

  camposBatismo = [
    { id: 'dataBatismo', label: 'Data do batismo', tipo: 'date' },
    { id: 'cidadeBatismo', label: 'Cidade do batismo', tipo: 'text' },
    { id: 'igrejaBatismo', label: 'Igreja do batismo', tipo: 'text' },
    { id: 'pastorBatismo', label: 'Pastor do batismo', tipo: 'text' }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      email: ['', [Validators.required, Validators.email]],
      celular: [''],
      profissao: [''],
      dataNascimento: [''],
      sexo: [''],
      estadoCivil: [''],
      cep: [''],
      estado: [''],
      cidade: [''],
      bairro: [''],
      rua: [''],
      numero: [''],
      complemento: [''],
      membroIgrejaDoRecreio: [''],
      cristao: [''],
      eBatizado: [''],
      dataBatismo: [''],
      cidadeBatismo: [''],
      igrejaBatismo: [''],
      pastorBatismo: [''],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
      aceitouTermos: [false, Validators.requiredTrue]
    });

    this.usuarioForm.get('eBatizado')?.valueChanges.subscribe(value => {
      this.mostrarCamposBatismo = value === 'sim';

      const campos = ['dataBatismo', 'cidadeBatismo', 'igrejaBatismo', 'pastorBatismo'];
      campos.forEach(campo => {
        const control = this.usuarioForm.get(campo);
        if (control) {
          if (this.mostrarCamposBatismo) {
            control.setValidators(Validators.required);
          } else {
            control.clearValidators();
          }
          control.updateValueAndValidity();
        }
      });
    });
  }

  onRegister(): void {
    if (this.usuarioForm.valid) {
      const formData = this.usuarioForm.value;
      this.authService.register(formData).subscribe({
        next: () => this.router.navigate(['/login']),
        error: err => console.log('Erro no registro do usuário: ', err),
      });
    } else {
      this.usuarioForm.markAllAsTouched();
    }
  }
}
