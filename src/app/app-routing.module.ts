import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DietPlannerComponent } from './components/diet-planner/diet-planner/diet-planner.component';
import { HomeComponent } from './components/home/home.component';

const routes: Route[] = [
  { path: '', component: AuthComponent},
  { path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
