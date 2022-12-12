import { useAnimation } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmiComponent } from './ami/ami.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EpisodeComponent } from './episode/episode.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PersoFavorisComponent } from './perso-favoris/perso-favoris.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { ProfilComponent } from './profil/profil.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {component: HomeComponent, path: "home"},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {component: PersonnageComponent, path: 'personnage'},
  {component: EpisodeComponent, path: 'episode'},
  {component: ConnexionComponent, path: 'login'},
  {component: InscriptionComponent, path: 'sign'},
  {component: ProfilComponent, path: 'profil'},
  {component: PersoFavorisComponent, path: 'persoFavoris'},
  {component: AmiComponent, path: 'amis'},
  {component: UserComponent, path: 'user'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
