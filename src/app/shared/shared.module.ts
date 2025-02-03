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
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
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
    SafeUrlPipe
  ]
})
export class SharedModule { }
