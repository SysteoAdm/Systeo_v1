// Importação dos módulos necessários do Angular
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-curso-chamados-lideranca',
  templateUrl: './slide-curso-chamados-lideranca.component.html',
  styleUrls: ['./slide-curso-chamados-lideranca.component.css']
})
export class SlideCursoChamadosLiderancaComponent {
   // Propriedades que serão passadas como entrada para o componente (Input Properties)
   @Input() videoTitle!: string; // Armazena o título do vídeo
   @Input() videoUrl!: string; // Armazena a URL do vídeo
   @Input() returnRoute: string = '/'; // ← NOVO INPUT

   // Lista de imagens do slider, cada uma com uma miniatura, URL do vídeo e título
   images = [
     { img: 'assets/mini_coverA1.webp', videoUrl: 'https://www.youtube.com/embed/j933MK3HHHg', title: 'Aula 1 - Objetivo do Curso | Pr. Marcus Gomes?' },
     { img: 'assets/mini_cover2.webp', videoUrl: 'https://www.youtube.com/embed/5rSApVoLPZ8', title: 'Aula 2 - Eu tenho um Chamado | Pr. Wander Gomes' },
     { img: 'assets/mini_cover3.webp', videoUrl: 'https://www.youtube.com/embed/ApKp3lRN3jM', title: 'Aula 3 - Servir, mais do que fazer | Pr. Ricardo Pinudo' },
     { img: 'assets/mini_cover4.webp', videoUrl: 'https://www.youtube.com/embed/7mdGcgDxSLU', title: 'Aula 4 - Bíblia: um tesouro eterno | Pr. Rogério Luiz' },
     { img: 'assets/mini_cover5.webp', videoUrl: 'https://www.youtube.com/embed/jznxutuXzuI', title: 'Aula 5 - O Fruto do Espírito | Pr. Humberto Chagas' },
     { img: 'assets/mini_cover6.webp', videoUrl: 'https://www.youtube.com/embed/hfXla-ZunvE', title: 'Aula 6 - A Nossa Parte | Pr. Douglas Branco' },
     { img: 'assets/mini_cover7.webp', videoUrl: 'https://www.youtube.com/embed/nHzh6H56X6s', title: 'Aula 7 - Perdão Total | Maurício Zágari' },
     { img: 'assets/mini_cover8.webp', videoUrl: 'https://www.youtube.com/embed/X5jmL74VLsA', title: 'Aula 8 - Era Uma Vez | Pr. Ronald Batista' },
     { img: 'assets/mini_cover9.webp', videoUrl: 'https://www.youtube.com/embed/VV8s0k8HBP4', title: 'Aula 9 - Teologia do Esporte | Pr. Ricardo Pinudo' },
     { img: 'assets/mini_cover1.webp', videoUrl: 'https://www.youtube.com/embed/umjSQ7IuYhM', title: 'Aula 1 - Qual é o Seu Propósito | Pr. Wander Gomes?' },
     { img: 'assets/mini_cover2.webp', videoUrl: 'https://www.youtube.com/embed/5rSApVoLPZ8', title: 'Aula 2 - As Bençãos que o Deserto Produz | Pr. Wander Gomes' },
     { img: 'assets/mini_cover3.webp', videoUrl: 'https://www.youtube.com/embed/ApKp3lRN3jM', title: 'Aula 3 - Servir, mais do que fazer | Pr. Ricardo Pinudo' },
     { img: 'assets/mini_cover4.webp', videoUrl: 'https://www.youtube.com/embed/7mdGcgDxSLU', title: 'Aula 4 - Bíblia: um tesouro eterno | Pr. Rogério Luiz' },
     { img: 'assets/mini_cover5.webp', videoUrl: 'https://www.youtube.com/embed/jznxutuXzuI', title: 'Aula 5 - O Fruto do Espírito | Pr. Humberto Chagas' },
     { img: 'assets/mini_cover6.webp', videoUrl: 'https://www.youtube.com/embed/hfXla-ZunvE', title: 'Aula 6 - A Nossa Parte | Pr. Douglas Branco' },
     { img: 'assets/mini_cover7.webp', videoUrl: 'https://www.youtube.com/embed/nHzh6H56X6s', title: 'Aula 7 - Perdão Total | Maurício Zágari' },
     { img: 'assets/mini_cover8.webp', videoUrl: 'https://www.youtube.com/embed/X5jmL74VLsA', title: 'Aula 8 - Era Uma Vez | Pr. Ronald Batista' },
     { img: 'assets/mini_cover9.webp', videoUrl: 'https://www.youtube.com/embed/VV8s0k8HBP4', title: 'Aula 9 - Teologia do Esporte | Pr. Ricardo Pinudo' },

   ];

   startIndex = 0; // Índice inicial das imagens visíveis no slider
   imagesPerView = 5; // Número de imagens exibidas por vez no slider

   // Injeta o serviço Router para navegação entre páginas
   constructor(private router: Router) {}

   // Getter que retorna as imagens visíveis no slider com base no índice inicial
   get visibleImages() {
     return this.images.slice(this.startIndex, this.startIndex + this.imagesPerView);
   }

   // Método para avançar no slider (próximas imagens)
   next(): void {
     if (this.startIndex + this.imagesPerView < this.images.length) {
       this.startIndex++;
     }
   }

   // Método para retroceder no slider (imagens anteriores)
   prev(): void {
     if (this.startIndex > 0) {
       this.startIndex--;
     }
   }

   // Método chamado ao clicar em uma imagem do slider
   // Redireciona para a página de player de vídeo, passando a URL e o título como parâmetros
   onImageClick(videoUrl: string, title: string): void {
     const currentUrl = this.router.url.split('?')[0]; // para evitar passar params extras

     this.router.navigate(['/video-player'], {
       queryParams: {
         videoUrl,
         title,
         returnTo: this.returnRoute // mais limpo
       }
     });
   }

}
