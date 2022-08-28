import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    TopbarComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule 
  ], 
  exports: [
    TopbarComponent, 
    NavbarComponent, 
    FooterComponent
  ]
})
export class SharedModule { }
