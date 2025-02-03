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

  constructor(private router: Router, private videoSearchService: VideoSearchService) {}

  // Método de pesquisa chamado quando o formulário é enviado
  searchVideos(query: string) {
    if (query) {
      this.router.navigate(['/searchResult'], { queryParams: { query } });
    }
  }


}
