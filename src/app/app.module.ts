import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonasjesComponent } from './components/personasjes/personasjes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { FormsModule} from '@angular/forms';
import { GenderPipe } from './pipes/gender.pipe';
import { TypePipe } from './pipes/type.pipe';
import { SpinkitComponent } from './components/shared/spinkit/spinkit.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    PersonasjesComponent,
    PersonajeComponent,
    GenderPipe,
    TypePipe,
    SpinkitComponent,
    LocationsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    // RouterModule.forChild(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
