import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './dashboard/databinding/databinding.component';
import { DirectivesComponent } from './dashboard/directives/directives.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PipesComponent } from './dashboard/pipes/pipes.component';
import { RoutingComponent } from './dashboard/routing/routing.component';
import { ServiceComponent } from './dashboard/service/service.component';
import { SigninComponent } from './dashboard/signin/signin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  // {path:'', redirectTo :"authentication", pathMatch:"full"},
  { path: '', component: AuthenticationComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'databinding', component: DatabindingComponent},
      { path: 'directives', component: DirectivesComponent},
      { path: 'home', component: HomeComponent},
      { path: 'pipes', component: PipesComponent, canActivate: [AuthGuard]},
      { path: 'routing', component: RoutingComponent},
      { path: 'service', component: ServiceComponent},
      { path: 'signin', component: SigninComponent},
    ],
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {path:'**', component: PagenotfoundComponent}      // Always this path should be at last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
