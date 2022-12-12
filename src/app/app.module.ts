import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { EpisodeComponent } from './episode/episode.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { PersoFavorisComponent } from './perso-favoris/perso-favoris.component';
import { AmiComponent } from './ami/ami.component';
import { UserComponent } from './user/user.component';
import { DemandeComponent } from './demande/demande.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonnageComponent,
    EpisodeComponent,
    ConnexionComponent,
    InscriptionComponent,
    ProfilComponent,
    PersoFavorisComponent,
    AmiComponent,
    UserComponent,
    DemandeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
