import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-cursos-img04',
  templateUrl: './slider-cursos-img04.component.html',
  styleUrls: ['./slider-cursos-img04.component.css']
})
export class SliderCursosImg04Component {
  images = [
    'assets/mini_cover4.webp',
    'assets/mini_cover5.webp',
    'assets/mini_cover6.webp',
    'assets/mini_cover7.webp',
    'assets/mini_cover6.webp',
    'assets/mini_cover7.webp',
    'assets/mini_cover8.webp',
    'assets/mini_cover9.webp',
    'assets/mini_cover2.webp',
    'assets/mini_cover3.webp',
    'assets/mini_cover4.webp',
    'assets/mini_cover5.webp',
    'assets/mini_cover6.webp',
    'assets/mini_cover7.webp',
    'assets/mini_cover8.webp',
    'assets/mini_cover9.webp',
    'assets/mini_cover5.webp',
    'assets/mini_cover6.webp',
    'assets/mini_cover7.webp',
    'assets/mini_cover8.webp',
    'assets/mini_cover9.webp',
    'assets/mini_cover1.webp',
    'assets/mini_cover2.webp',
    'assets/mini_cover3.webp',
    'assets/mini_cover4.webp',
    'assets/mini_cover5.webp',
    'assets/mini_cover6.webp',
    'assets/mini_cover7.webp',
    'assets/mini_cover8.webp',
    'assets/mini_cover9.webp',
    'assets/mini_cover1.webp',
    'assets/mini_cover2.webp',
    'assets/mini_cover3.webp',
    'assets/mini_cover4.webp',
    'assets/mini_cover5.webp',
    'assets/mini_cover6.webp',
    'assets/mini_cover7.webp',
    'assets/mini_cover8.webp',
    'assets/mini_cover9.webp',
    
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
