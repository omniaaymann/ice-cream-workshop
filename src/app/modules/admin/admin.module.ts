import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { IcecreamFlavorComponent } from './components/icecream-flavor/icecream-flavor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { IcecreamSizesComponent } from './components/icecream-sizes/icecream-sizes.component';
import { IcecreamTypesComponent } from './components/icecream-types/icecream-types.component'  

@NgModule({
  declarations: [AdminPanelComponent, IcecreamFlavorComponent, DashboardComponent, NavbarComponent, IcecreamSizesComponent, IcecreamTypesComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule, HttpClientModule, MatTableModule],
  exports: [DashboardComponent, NavbarComponent]
})
export class AdminModule {}
