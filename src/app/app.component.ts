import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IgrejaRecreio';

  showNavbar = true;
  showFooter = true;

  constructor(private router: Router) {

    //Menu Principal
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Rotas onde a navbar NÃO deve aparecer
        const noNavbarRoutes = ['/homeEscolaDigital','/LoginPage', '/Criar-Novo-Usuario',];

        this.showNavbar = !noNavbarRoutes.includes(event.urlAfterRedirects);
      }
    });


    //Footer Principal
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Rotas onde o footer NÃO deve aparecer
        const noNavbarRoutes = ['/LoginPage', '/Criar-Novo-Usuario','/homeEscolaDigital'];

        this.showFooter = !noNavbarRoutes.includes(event.urlAfterRedirects);
      }
    });
  }






}
