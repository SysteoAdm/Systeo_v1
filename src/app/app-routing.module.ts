import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'homeEscolaDigital', loadChildren: () => import('./views/home-inicio/home-inicio.module').then(m => m.HomeInicioModule) },
  {
    path: '',
    redirectTo: '/homeEscolaDigital',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'Novidades', loadChildren: () => import('./views/novidades/novidades.module').then(m => m.NovidadesModule) },
  { path: 'EscolaBiblica', loadChildren: () => import('./views/escola-biblica/escola-biblica.module').then(m => m.EscolaBiblicaModule) },
  { path: 'CursosDeFamilia', loadChildren: () => import('./views/cursos-familia/cursos-familia.module').then(m => m.CursosFamiliaModule) },
  { path: 'DesenvolvimentoPessoal', loadChildren: () => import('./views/desenvolvimento-pessoal/desenvolvimento-pessoal.module').then(m => m.DesenvolvimentoPessoalModule) },
  { path: 'FormacaoDeLideres', loadChildren: () => import('./views/formacao-lideres/formacao-lideres.module').then(m => m.FormacaoLideresModule) },
  { path: 'Lancamentos', loadChildren: () => import('./views/lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  { path: 'FaleConosco', loadChildren: () => import('./views/fale-conosco/fale-conosco.module').then(m => m.FaleConoscoModule) },
  { path: 'LoginPage', loadChildren: () => import('./views/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'searchResult', loadChildren: () => import('./views/search-bar-page/search-bar-page.module').then(m => m.SearchBarPageModule) },
  { path: 'TestPage', loadChildren: () => import('./views/test-page/test-page.module').then(m => m.TestPageModule) },
  { path: 'video-player', loadChildren: () => import('./views/video-player/video-player.module').then(m => m.VideoPlayerModule) },
  { path: 'Perfil', loadChildren: () => import('./views/perfil/perfil.module').then(m => m.PerfilModule) },
  { path: 'Usuarios', loadChildren: () => import('./views/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'Criar-Novo-Usuario', loadChildren: () => import('./views/criar-novo-usuario/criar-novo-usuario.module').then(m => m.CriarNovoUsuarioModule) },
  { path: 'CurusosAvancado', loadChildren: () => import('./views/curusos-avancado/curusos-avancado.module').then(m => m.CurusosAvancadoModule) },
  { path: 'perfilGerenciavel', loadChildren: () => import('./views/perfil-gerenciavel/perfil-gerenciavel.module').then(m => m.PerfilGerenciavelModule) },
  { path: 'A-Doutrina-Do-Espírito-Santo', loadChildren: () => import('./views/cursosViews/a-doutrina-do-espirito-santo/a-doutrina-do-espirito-santo.module').then(m => m.ADoutrinaDoEspiritoSantoModule) },
  { path: 'Adolescentes', loadChildren: () => import('./views/cursosViews/adolescentes/adolescentes.module').then(m => m.AdolescentesModule) },
  { path: 'administrando-a-vida-financeira', loadChildren: () => import('./views/cursosViews/administrando-a-vida-financeira/administrando-a-vida-financeira.module').then(m => m.AdministrandoAVidaFinanceiraModule) },
  { path: 'Apologetica-Defesa-Da-Fe', loadChildren: () => import('./views/cursosViews/apologetica-defesa-da-fe/apologetica-defesa-da-fe.module').then(m => m.ApologeticaDefesaDaFeModule) },
  { path: 'BasesDaFeCrista', loadChildren: () => import('./views/cursosViews/bases-da-fe-crista/bases-da-fe-crista.module').then(m => m.BasesDaFeCristaModule) },
  { path: 'Casais', loadChildren: () => import('./views/cursosViews/casais/casais.module').then(m => m.CasaisModule) },
  { path: 'Conhecendo-Deus-E-Fazendo-Sua-Vontade', loadChildren: () => import('./views/cursosViews/conhecendo-deus-e-fazendo-sua-vontade/conhecendo-deus-e-fazendo-sua-vontade.module').then(m => m.ConhecendoDeusEFazendoSuaVontadeModule) },
  { path: 'EstudosNoAntigoTestamento', loadChildren: () => import('./views/cursosViews/estudos-no-antigo-testamento/estudos-no-antigo-testamento.module').then(m => m.EstudosNoAntigoTestamentoModule) },
  { path: 'EstudosNoNovoTestamento', loadChildren: () => import('./views/cursosViews/estudos-no-novo-testamento/estudos-no-novo-testamento.module').then(m => m.EstudosNoNovoTestamentoModule) },
  { path: 'HistoriaDaIgreja', loadChildren: () => import('./views/cursosViews/historia-da-igreja/historia-da-igreja.module').then(m => m.HistoriaDaIgrejaModule) },
  { path: 'InterpretacaoBiblica', loadChildren: () => import('./views/cursosViews/interpretacao-biblica/interpretacao-biblica.module').then(m => m.InterpretacaoBiblicaModule) },
  { path: 'OsSalmos', loadChildren: () => import('./views/cursosViews/os-salmos/os-salmos.module').then(m => m.OsSalmosModule) },
  { path: 'Toda-A-Biblia-Em-Um-Ano', loadChildren: () => import('./views/cursosViews/toda-a-biblia-em-um-ano/toda-a-biblia-em-um-ano.module').then(m => m.TodaABibliaEmUmAnoModule) },
  { path: 'UmaNovaVida', loadChildren: () => import('./views/cursosViews/uma-nova-vida/uma-nova-vida.module').then(m => m.UmaNovaVidaModule) },
  { path: 'UmaVidaComPropositos', loadChildren: () => import('./views/cursosViews/uma-vida-com-propositos/uma-vida-com-propositos.module').then(m => m.UmaVidaComPropositosModule) },
  { path: 'Vida-E-Obra-Do-Apostolo-Paulo', loadChildren: () => import('./views/cursosViews/vida-e-obra-do-apostolo-paulo/vida-e-obra-do-apostolo-paulo.module').then(m => m.VidaEObraDoApostoloPauloModule) },
  { path: '12-Passos-A-Luz-Das-Escrituras', loadChildren: () => import('./views/cursosViews/doze-passos-a-luz-das-escrituras/doze-passos-a-luz-das-escrituras.module').then(m => m.DozePassosALuzDasEscriturasModule) },

  { path: 'AV-Adolescentes', loadChildren: () => import('./views/avaliacoesViews/av-adolescentes/av-adolescentes.module').then(m => m.AVAdolescentesModule) },
  { path: 'MinhasAvalicacoes', loadChildren: () => import('./views/avaliacoesViews/minhas-avalicacoes/minhas-avalicacoes.module').then(m => m.MinhasAvalicacoesModule) },

  // Rota curinga para redirecionar qualquer rota inexistente para a home
  { path: '**', redirectTo: '/homeEscolaDigital' }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
