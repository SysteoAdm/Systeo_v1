import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-cursos-img05',
  templateUrl: './slider-cursos-img05.component.html',
  styleUrls: ['./slider-cursos-img05.component.css']
})
export class SliderCursosImg05Component {
  images = [
    'assets/nt01.jpg',
    'assets/nt02.jpg',
    'assets/nt03.jpg',
    'assets/nt04.webp',
    'assets/nt05.webp',
    'assets/nt06.jpg',
    'assets/nt07.jpg',
    'assets/nt08.webp',
    'assets/nt01.jpg',
    'assets/nt02.jpg',
    'assets/nt03.jpg',
    'assets/nt04.webp',
    'assets/nt05.webp',
    'assets/nt06.jpg',
    'assets/nt07.jpg',
    'assets/nt08.webp',
    'assets/nt01.jpg',
    'assets/nt02.jpg',
    'assets/nt03.jpg',
    'assets/nt04.webp',
    'assets/nt05.webp',
    'assets/nt06.jpg',
    'assets/nt07.jpg',
    'assets/nt08.webp',
    'assets/nt01.jpg',
    'assets/nt02.jpg',
    'assets/nt03.jpg',
    'assets/nt04.webp',
    'assets/nt05.webp',
    'assets/nt06.jpg',
    'assets/nt07.jpg',
    'assets/nt08.webp',
    
      ];
  
      startIndex = 0;
      imagesPerView = 5;
    
      // Atualiza a lista de imagens visíveis dinamicamente
      get visibleImages(): string[] {
        return this.images.slice(this.startIndex, this.startIndex + this.imagesPerView);
      }
    
      next(): void {
        if (this.startIndex + this.imagesPerView < this.images.length) {
          this.startIndex++; // Avança apenas uma imagem
        }
      }
    
      prev(): void {
        if (this.startIndex > 0) {
          this.startIndex--; // Retrocede apenas uma imagem
        }
      }
    
      onImageClick(img: string): void {
        console.log('Imagem clicada:', img);
      }
}
