import { Component } from '@angular/core';

@Component({
  selector: 'app-minhas-avalicacoes',
  templateUrl: './minhas-avalicacoes.component.html',
  styleUrls: ['./minhas-avalicacoes.component.css']
})
export class MinhasAvalicacoesComponent {
  avaliacoes = [
    {
      curso: 'Adolescentes',
      situacao: 'Disponível',
      av1: '',
      av2: '',
      link: '/AV-Adolescentes'
    },
    {
      curso: 'Casados Pra Sempre',
      situacao: 'Não Disponível',
      av1: '',
      av2: '',
      link: '/AV-Adolescentes'
    },
    {
      curso: 'Estudos No Antigo Testamento',
      situacao: 'Prazo Vencido',
      av1: '',
      av2: '',
      link: '/AV-Adolescentes'
    },
    {
      curso: 'Estudos No Novo Testamento',
      situacao: 'Disponível',
      av1: '7.5 / 10',
      av2: '',
      link: '/AV-Adolescentes'
    },
    {
      curso: 'Apologética Defesa Da Fé',
      situacao: 'Disponível',
      av1: '8.0 / 10',
      av2: '6.5 / 10',
      link: '/AV-Adolescentes'
    }
  ];

}
