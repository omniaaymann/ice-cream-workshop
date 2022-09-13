import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IcecreamFlavorComponent } from './components/icecream-flavor/icecream-flavor.component';
import { IcecreamSizesComponent } from './components/icecream-sizes/icecream-sizes.component';
import { IcecreamTypesComponent } from './components/icecream-types/icecream-types.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'icecreamFlavors',
    component: IcecreamFlavorComponent,
  },
  {
    path: 'icecreamSizes',
    component: IcecreamSizesComponent,
  },
  {
    path: 'icecreamTypes',
    component: IcecreamTypesComponent,
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule { }
