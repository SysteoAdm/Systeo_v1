import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoSearchService {
  private videos = [
    { title: 'Aula Novo Testamento', url: 'https://www.youtube.com/watch?v=PQYkEjJt7UE' },
    { title: 'Aula Novo Testamento 1', url: 'https://www.youtube.com/watch?v=PQYkEjJt7UE' },
    { title: 'Aula Novo Testamento 2', url: 'https://www.youtube.com/watch?v=PQYkEjJt7UE' },
    { title: 'Aula Novo Testamento 3', url: 'https://www.youtube.com/watch?v=PQYkEjJt7UE' },
    { title: 'Aula Novo Testamento 4', url: 'https://www.youtube.com/watch?v=PQYkEjJt7UE' },
    { title: 'Aula Novo Testamento 5', url: 'https://www.youtube.com/watch?v=PQYkEjJt7UE' },
    { title: 'Aula Novo Testamento 6', url: 'https://www.youtube.com/watch?v=PQYkEjJt7UE' },
    { title: 'Aula Novo Testamento 7', url: 'https://www.youtube.com/watch?v=PQYkEjJt7UE' },
    { title: 'Aula de Física', url: 'https://www.youtube.com/watch?v=xyz2' },
    { title: 'Aula de Química', url: 'https://www.youtube.com/watch?v=xyz3' }
    // Outros vídeos aqui...
  ];

  constructor() {}

  search(query: string) {
    const lowerQuery = query.toLowerCase();
    return this.videos.filter(video => video.title.toLowerCase().includes(lowerQuery));
  }
}
