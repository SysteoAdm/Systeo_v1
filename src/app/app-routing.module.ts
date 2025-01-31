import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'oneCursoDeNoivos', loadChildren: () => import('./views/one/one.module').then(m => m.OneModule) },
  { path: 'CasadosPraSempre', loadChildren: () => import('./views/casados/casados.module').then(m => m.CasadosModule) },
  { path: 'LiderDeCelula', loadChildren: () => import('./views/celula/celula.module').then(m => m.CelulaModule) },
  { path: 'Novidades', loadChildren: () => import('./views/novidades/novidades.module').then(m => m.NovidadesModule) },
  { path: 'EscolaBiblica', loadChildren: () => import('./views/escola-biblica/escola-biblica.module').then(m => m.EscolaBiblicaModule) },
  { path: 'CursosDeFamilia', loadChildren: () => import('./views/cursos-familia/cursos-familia.module').then(m => m.CursosFamiliaModule) },
  { path: 'DesenvolvimentoPessoal', loadChildren: () => import('./views/desenvolvimento-pessoal/desenvolvimento-pessoal.module').then(m => m.DesenvolvimentoPessoalModule) },
  { path: 'FormacaoDeLideres', loadChildren: () => import('./views/formacao-lideres/formacao-lideres.module').then(m => m.FormacaoLideresModule) },
  { path: 'Lancamentos', loadChildren: () => import('./views/lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  { path: 'FaleConosco', loadChildren: () => import('./views/fale-conosco/fale-conosco.module').then(m => m.FaleConoscoModule) },
  { path: 'LoginPage', loadChildren: () => import('./views/login-page/login-page.module').then(m => m.LoginPageModule) },




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
