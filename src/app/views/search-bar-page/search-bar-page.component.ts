import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoSearchService } from 'src/app/services/video-search.service';

// Defina uma interface para o tipo do vídeo
interface Video {
  title: string;
  url: string;
}

@Component({
  selector: 'app-search-bar-page',
  templateUrl: './search-bar-page.component.html',
  styleUrls: ['./search-bar-page.component.css']
})
export class SearchBarPageComponent implements OnInit {
  searchQuery: string = '';
  results: Video[] = [];  // Agora é um array de 'Video', que tem as propriedades 'title' e 'url'

  constructor(
    private route: ActivatedRoute,
    private videoSearchService: VideoSearchService
  ) {}

  ngOnInit() {
    // Captura o parâmetro de pesquisa da URL
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'];
      this.results = this.videoSearchService.search(this.searchQuery);
    });
  }
}
