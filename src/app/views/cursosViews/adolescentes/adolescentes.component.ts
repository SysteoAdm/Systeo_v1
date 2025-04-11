import { Component } from '@angular/core';

@Component({
  selector: 'app-adolescentes',
  templateUrl: './adolescentes.component.html',
  styleUrls: ['./adolescentes.component.css']
})
export class AdolescentesComponent {
  returnRoute = '/adolescentes'; // Define a rota de retorno

  cards = [
    {
      icon: 'bi bi-lightning-fill',
      title: 'Aula 1',
      description: 'Processos otimizados para resultados rápidos.'
    },
    {
      icon: 'bi bi-cpu-fill',
      title: 'Aula 2',
      description: 'Infraestrutura moderna e eficiente.'
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Aula 3',
      description: 'Trabalho em equipe com alto desempenho.'
    },
    {
      icon: 'bi bi-globe2',
      title: 'Aula 4',
      description: 'Acesso rápido e global às soluções.'
    },
    {
      icon: 'bi bi-award-fill',
      title: 'Aula 5',
      description: 'Padrões elevados de entrega e suporte.'
    },
    {
      icon: 'bi bi-lightbulb-fill',
      title: 'Aula 6',
      description: 'Criatividade aplicada à resolução de problemas.'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Aula 7',
      description: 'Proteção e confiabilidade em todos os níveis.'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Aula 8',
      description: 'Proteção e confiabilidade em todos os níveis.'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Aula 9',
      description: 'Proteção e confiabilidade em todos os níveis.'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Aula 10',
      description: 'Proteção e confiabilidade em todos os níveis.'
    }
  ];

}
