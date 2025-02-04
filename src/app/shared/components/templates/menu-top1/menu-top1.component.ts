import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideoSearchService } from 'src/app/services/video-search.service';

@Component({
  selector: 'app-menu-top1',
  templateUrl: './menu-top1.component.html',
  styleUrls: ['./menu-top1.component.css']
})
export class MenuTop1Component {
  searchQuery: string = '';
  isInputVisible: boolean = false; // Variável para controlar a visibilidade do input

  constructor(private router: Router, private videoSearchService: VideoSearchService) {}

  // Método para exibir ou ocultar o input de pesquisa
  toggleInputVisibility() {
    this.isInputVisible = !this.isInputVisible;
  }

  // Método de pesquisa chamado quando o formulário é enviado
  searchVideos(query: string) {
    if (query) {
      this.router.navigate(['/searchResult'], { queryParams: { query } });
    }
  }

  // Método para alternar a ação do botão, se pesquisa ou expandir input
  onSearchOrExpand() {
    if (this.searchQuery) {
      // Se tiver texto, realiza a pesquisa
      this.searchVideos(this.searchQuery);
    } else {
      // Caso contrário, alterna a visibilidade do input
      this.toggleInputVisibility();
    }
  }

}
