import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { MenuTop1Component } from './components/templates/menu-top1/menu-top1.component';
import { WelcomeBanner01Component } from './components/welcome-banner01/welcome-banner01.component';
import { ImageSlider1Component } from './components/image-slider1/image-slider1.component';
import { SlideCursos1Component } from './components/slide-cursos1/slide-cursos1.component';
import { SlideCursoOneComponent } from './components/slide-curso-one/slide-curso-one.component';
import { SlideCursoCasadosPraSempreComponent } from './components/slide-curso-casados-pra-sempre/slide-curso-casados-pra-sempre.component';
import { SlideCursoLiderDeCelulaComponent } from './components/slide-curso-lider-de-celula/slide-curso-lider-de-celula.component';
import { SlideCursosEscolaBiblicaComponent } from './components/slide-cursos-escola-biblica/slide-cursos-escola-biblica.component';
import { SlideCursosDeFamiliaComponent } from './components/slide-cursos-de-familia/slide-cursos-de-familia.component';
import { SlideCursosDesenvolvimentoPessoalComponent } from './components/slide-cursos-desenvolvimento-pessoal/slide-cursos-desenvolvimento-pessoal.component';
import { SlideCursosLancamentosComponent } from './components/slide-cursos-lancamentos/slide-cursos-lancamentos.component';
import { SlideCursosLiderCelulaComponent } from './components/slide-cursos-lider-celula/slide-cursos-lider-celula.component';
import { SlideCursosFormacaoLideresComponent } from './components/slide-cursos-formacao-lideres/slide-cursos-formacao-lideres.component';
import { FaleConoscoFormComponent } from './components/fale-conosco-form/fale-conosco-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { Footer1Component } from './components/footer1/footer1.component';


@NgModule({
  declarations: [
    SharedComponent,
    MenuTop1Component,
    WelcomeBanner01Component,
    ImageSlider1Component,
    SlideCursos1Component,
    SlideCursoOneComponent,
    SlideCursoCasadosPraSempreComponent,
    SlideCursoLiderDeCelulaComponent,
    SlideCursosEscolaBiblicaComponent,
    SlideCursosDeFamiliaComponent,
    SlideCursosDesenvolvimentoPessoalComponent,
    SlideCursosLancamentosComponent,
    SlideCursosLiderCelulaComponent,
    SlideCursosFormacaoLideresComponent,
    FaleConoscoFormComponent,
    LoginFormComponent,
    Footer1Component
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SharedComponent,
    MenuTop1Component,
    WelcomeBanner01Component,
    ImageSlider1Component,
    SlideCursos1Component,
    SlideCursoOneComponent,
    SlideCursoCasadosPraSempreComponent,
    SlideCursoLiderDeCelulaComponent,
    SlideCursosEscolaBiblicaComponent,
    SlideCursosDeFamiliaComponent,
    SlideCursosDesenvolvimentoPessoalComponent,
    SlideCursosLancamentosComponent,
    SlideCursosLiderCelulaComponent,
    SlideCursosFormacaoLideresComponent,
    FaleConoscoFormComponent,
    LoginFormComponent,
    Footer1Component
  ]
})
export class SharedModule { }
