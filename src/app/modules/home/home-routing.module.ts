import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home.component';
import { AboutScreenComponent } from './screens/about-screen/about-screen.component';
import { CartScreenComponent } from './screens/cart-screen/cart-screen.component';
import { ProductsScreenComponent } from './screens/products-screen/products-screen.component';
import { ServicesScreenComponent } from './screens/services-screen/services-screen.component';
import { UserProfileScreenComponent } from './screens/user-profile-screen/user-profile-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutScreenComponent,
  },
  {
    path: 'products',
    component: ProductsScreenComponent,
  },
  {
    path: 'services',
    component: ServicesScreenComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'cart',
    component: CartScreenComponent,
  },
  {
    path: 'user',
    component: UserProfileScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
