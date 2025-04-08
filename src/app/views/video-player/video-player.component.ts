import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common'; // IMPORTADO

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  videoUrl: SafeResourceUrl = '';
  videoTitle: string = '';
  returnTo: string = '/'; // ← CORRIGIDO AQUI

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private location: Location, // INJETADO
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(params['videoUrl']);
      this.videoTitle = params['title'];
      this.returnTo = params['returnTo'] || '/'; // ← RECEBE A ROTA DE RETORNO
    });
  }

  closePlayer(): void {
    this.router.navigate([this.returnTo]);
  }
}
