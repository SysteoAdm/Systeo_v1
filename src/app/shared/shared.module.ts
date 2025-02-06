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
    SliderCursosImg05Component
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
    SliderCursosImg05Component
  ]
})
export class SharedModule { }
