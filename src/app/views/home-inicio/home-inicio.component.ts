import { Component } from '@angular/core';

@Component({
  selector: 'app-home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrls: ['./home-inicio.component.css']
})
export class HomeInicioComponent {
  cards = [
    {
      icon: 'bi bi-lightning-fill',
      title: 'Bíblia',
      description: 'Estudos do Novo Testamento.'
    },
    {
      icon: 'bi bi-cpu-fill',
      title: 'Bíblia',
      description: 'Estudos do Velho Testamento.'
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Casais',
      description: 'Casados Pra Sempre.'
    },
    {
      icon: 'bi bi-globe2',
      title: 'Liderança',
      description: 'Acesso rápido e global às soluções.'
    },
    {
      icon: 'bi bi-award-fill',
      title: 'Apologética',
      description: 'Padrões elevados de entrega e suporte.'
    },
    {
      icon: 'bi bi-lightbulb-fill',
      title: 'Teologia',
      description: 'Criatividade aplicada à resolução de problemas.'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Música',
      description: 'Proteção e confiabilidade em todos os níveis.'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Hermenêutica',
      description: 'Proteção e confiabilidade em todos os níveis.'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Fé Cristã',
      description: 'Proteção e confiabilidade em todos os níveis.'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Jovens',
      description: 'Proteção e confiabilidade em todos os níveis.'
    }
  ];
}
