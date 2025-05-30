import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { MenuTop1Component } from './components/templates/menu-top1/menu-top1.component';
import { WelcomeBanner01Component } from './components/welcome-banner01/welcome-banner01.component';
import { ImageSlider1Component } from './components/image-slider1/image-slider1.component';
import { SlideCursos1Component } from './components/slide-cursos1/slide-cursos1.component';
import { SlideCursosEscolaBiblicaComponent } from './components/slide-cursos-escola-biblica/slide-cursos-escola-biblica.component';
import { SlideCursosDeFamiliaComponent } from './components/slide-cursos-de-familia/slide-cursos-de-familia.component';
import { SlideCursosDesenvolvimentoPessoalComponent } from './components/slide-cursos-desenvolvimento-pessoal/slide-cursos-desenvolvimento-pessoal.component';
import { SlideCursosLancamentosComponent } from './components/slide-cursos-lancamentos/slide-cursos-lancamentos.component';
import { SlideCursosFormacaoLideresComponent } from './components/slide-cursos-formacao-lideres/slide-cursos-formacao-lideres.component';
import { FaleConoscoFormComponent } from './components/fale-conosco-form/fale-conosco-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { Footer1Component } from './components/templates/footer1/footer1.component';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from '../safe-url.pipe';
import { SliderCursosImg01Component } from './components/slider-cursos-img01/slider-cursos-img01.component';
import { SliderCursosImg02Component } from './components/slider-cursos-img02/slider-cursos-img02.component';
import { SliderCursosImg03Component } from './components/slider-cursos-img03/slider-cursos-img03.component';
import { SliderCursosImg04Component } from './components/slider-cursos-img04/slider-cursos-img04.component';
import { SliderCursosImg05Component } from './components/slider-cursos-img05/slider-cursos-img05.component';
import { ListagemUsuariosComponent } from './components/listagem-usuarios/listagem-usuarios.component';
import { AlocaCursosComponent } from './components/aloca-cursos/aloca-cursos.component';
import { SlideCursoAdolescentesComponent } from './components/slide-curso-adolescentes/slide-curso-adolescentes.component';
import { SlideCursoADoutrinaDoEspiritoSantoComponent } from './components/slide-curso-a-doutrina-do-espirito-santo/slide-curso-a-doutrina-do-espirito-santo.component';
import { MenuTopLandingComponent } from './components/templates/menu-top-landing/menu-top-landing.component';
import { FooterLandingComponent } from './components/templates/footer-landing/footer-landing.component';
import { SlideCursoChamadosLiderancaComponent } from './components/slide-curso-chamados-lideranca/slide-curso-chamados-lideranca.component';



@NgModule({
  declarations: [
    SharedComponent,
    MenuTop1Component,
    WelcomeBanner01Component,
    ImageSlider1Component,
    SlideCursos1Component,
    SlideCursosEscolaBiblicaComponent,
    SlideCursosDeFamiliaComponent,
    SlideCursosDesenvolvimentoPessoalComponent,
    SlideCursosLancamentosComponent,
    SlideCursosFormacaoLideresComponent,
    FaleConoscoFormComponent,
    LoginFormComponent,
    Footer1Component,
    SafeUrlPipe,
    SliderCursosImg01Component,
    SliderCursosImg02Component,
    SliderCursosImg03Component,
    SliderCursosImg04Component,
    SliderCursosImg05Component,
    ListagemUsuariosComponent,
    AlocaCursosComponent,
    SlideCursoAdolescentesComponent,
    SlideCursoADoutrinaDoEspiritoSantoComponent,
    MenuTopLandingComponent,
    FooterLandingComponent,
    SlideCursoChamadosLiderancaComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,

  ],
  exports: [
    SharedComponent,
    MenuTop1Component,
    WelcomeBanner01Component,
    ImageSlider1Component,
    SlideCursos1Component,
    SlideCursosEscolaBiblicaComponent,
    SlideCursosDeFamiliaComponent,
    SlideCursosDesenvolvimentoPessoalComponent,
    SlideCursosLancamentosComponent,
    SlideCursosFormacaoLideresComponent,
    FaleConoscoFormComponent,
    LoginFormComponent,
    Footer1Component,
    SafeUrlPipe,
    SliderCursosImg01Component,
    SliderCursosImg02Component,
    SliderCursosImg03Component,
    SliderCursosImg04Component,
    SliderCursosImg05Component,
    ListagemUsuariosComponent,
    AlocaCursosComponent,
    SlideCursoAdolescentesComponent,
    SlideCursoADoutrinaDoEspiritoSantoComponent,
    MenuTopLandingComponent,
    FooterLandingComponent,
    SlideCursoChamadosLiderancaComponent,

  ]
})
export class SharedModule { }
