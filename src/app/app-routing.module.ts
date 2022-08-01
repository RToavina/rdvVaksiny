import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/services/auth.guard';
import {SplashComponent} from './splash/splash.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {
    path: 'splash', component: SplashComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
