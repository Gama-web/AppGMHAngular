import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HelpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
