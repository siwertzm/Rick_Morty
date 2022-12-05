import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './episode/episode.component';
import { HomeComponent } from './home/home.component';
import { PersonnageComponent } from './personnage/personnage.component';

const routes: Routes = [
  {component: HomeComponent, path: "home"},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {component: PersonnageComponent, path: 'personnage'},
  {component: EpisodeComponent, path: 'episode'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
