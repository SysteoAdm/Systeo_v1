import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    // Extrair o ID do vídeo do YouTube
    const videoId = this.extractVideoId(url);
    
    // Transformar a URL para o formato de embed com parâmetros de segurança
    const safeUrl = `https://www.youtube.com/embed/${videoId}?rel=0&controls=1&modestbranding=1&iv_load_policy=3&fs=1`;
    
    // Retornar o URL seguro
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeUrl);
  }

  private extractVideoId(url: string): string {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\/?[\w=&]+|v\/)?(?:watch\?v=|embed\/|v=))([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : ''; // Retorna o ID do vídeo
  }
}
