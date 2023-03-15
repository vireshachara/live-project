import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingComponent } from './routing/routing.component';
import { ServiceComponent } from './service/service.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  
  { path: 'databinding', component: DatabindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'signin', component: SigninComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
