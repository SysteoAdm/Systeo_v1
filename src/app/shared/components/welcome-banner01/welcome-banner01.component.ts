import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-banner01',
  templateUrl: './welcome-banner01.component.html',
  styleUrls: ['./welcome-banner01.component.css']
})
export class WelcomeBanner01Component {
  
  ngAfterViewInit(): void {
    const carousel = document.getElementById('homeSlider'); // Seleciona o elemento do carousel pelo ID
    const indicators = document.querySelectorAll('.progress-indicators .indicator'); // Seleciona os indicadores

    if (carousel) {
      // Adiciona o evento ao slider do Bootstrap
      carousel.addEventListener('slid.bs.carousel', (event: any) => {
        // Remove a classe 'active' de todos os indicadores
        indicators.forEach((indicator) => indicator.classList.remove('active'));

        // Identifica o índice do slide ativo e adiciona a classe 'active'
        const activeIndex = event.to; // `event.to` é o índice do slide ativo
        indicators[activeIndex].classList.add('active');
      });
    }
  }
}
