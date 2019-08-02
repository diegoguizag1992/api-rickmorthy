import { PersonasjesComponent } from './components/personasjes/personasjes.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { PersonajeComponent } from './components/personaje/personaje.component';


const routes: Routes = [
  { path: 'personajes', component: PersonasjesComponent },
  { path: 'personajes/:id', component: PersonajeComponent },
  { path: 'personaje', component: PersonajeComponent },
  {path:'**', redirectTo:'personajes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
