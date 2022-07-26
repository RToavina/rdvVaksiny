import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', redirectTo: 'login/patient', pathMatch: 'full' },
  {
    path: 'login/patient',
    component: LoginComponent,
    data: { type: 'Patient' },
  },
  { path: 'login/admin', component: LoginComponent, data: { type: 'Admin' } },
  { path: 'login/vaccinodrome', component: LoginComponent, data: { type: 'Vaccinodrome' } },
  { path: 'inscription', component: InscriptionComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
