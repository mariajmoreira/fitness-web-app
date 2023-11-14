import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodNavComponent } from './components/food-nav/food-nav.component';

import {FaIconLibrary,FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DietPlannerComponent } from './components/diet-planner/diet-planner/diet-planner.component';
import { MealPlannerComponent } from './components/diet-planner/meal-planner/meal-planner.component';
import { MenuSidebarComponent } from './components/sidebar/menu-sidebar/menu-sidebar.component';
import { FoodContainerComponent } from './shared-components/food-container/food-container.component';
import { ClientDietComponent } from './components/client-diet/client-diet.component';
import { DashIfEmptyPipePipe } from './resources/pipes/dash-if-empty-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodNavComponent,
    DietPlannerComponent,
    MealPlannerComponent,
    MenuSidebarComponent,
    FoodContainerComponent,
    ClientDietComponent,
    DashIfEmptyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas,far)
  }
 }
