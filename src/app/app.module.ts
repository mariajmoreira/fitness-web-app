import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { FoodMacrosComponent } from './components/food-macros/food-macros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { 
	IgxDragDirective,
	IgxDropDirective,
	IgxDragDropModule,
	IgxDialogModule
 } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FoodMacrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IgxDragDropModule,
    IgxDialogModule,
    NgModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
