import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { DatabindingComponent } from './databinding/databinding.component';
// import { PipesComponent } from './pipes/pipes.component';
import { RoutingComponent } from './routing/routing.component';
import { ServiceComponent } from './service/service.component';
import { SigninComponent } from './signin/signin.component';






@NgModule({
  declarations: [
    HomeComponent,
    DirectivesComponent,
    DatabindingComponent,
    // PipesComponent,
    RoutingComponent,
    ServiceComponent,
    SigninComponent,
  ],
  imports: [DashboardRoutingModule],
})
export class DashboardModule {}
