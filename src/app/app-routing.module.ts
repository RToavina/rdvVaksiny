import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/services/auth.guard';
import { SplashComponent } from './splash/splash.component';
import { LoggedInAuthGuard } from './shared/services/logged-in-auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRdvComponent } from './user-rdv/user-rdv.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedInAuthGuard],
  },
  { path: 'inscription', component: InscriptionComponent },
  {
    path: 'splash',
    component: SplashComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
  {
    path: 'user-rdv',
    component: UserRdvComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
