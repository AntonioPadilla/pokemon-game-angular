import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import {IniciarSessioPadillaComponent} from "./iniciar-sessio-padilla/iniciar-sessio-padilla.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {path: 'iniciarSessioPadilla', component:IniciarSessioPadillaComponent},
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
