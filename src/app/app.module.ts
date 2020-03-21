import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {format} from './formatting/revenue/format.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionComponent } from './condition/condition.component';
import { FormattingComponent } from './formatting/formatting.component';
import {Routes,RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RevenueComponent } from './formatting/revenue/revenue.component';
import { HomeComponent } from './home/home.component';
import { MonthComponent } from './formatting/month/month.component';
import { CategoryComponent } from './formatting/category/category.component';

const appRoutes:Routes=[
  { path : '', component:HomeComponent } ,

  { path : 'format', component:FormattingComponent } ,
  { path : 'condition', component:ConditionComponent } ,
  {path:'format/revenue', component:RevenueComponent},
  {path:'format/month', component:MonthComponent},
  {path:'format/category', component:CategoryComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    ConditionComponent,
    FormattingComponent,
    RevenueComponent,
    format,
    HomeComponent,
    MonthComponent,
    CategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
