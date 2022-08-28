import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from '@shared/shared.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutComponent } from './components/about/about.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProductsComponent } from './components/products/products.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AboutScreenComponent } from './screens/about-screen/about-screen.component';

import { ProductsScreenComponent } from './screens/products-screen/products-screen.component';
import { ServicesScreenComponent } from './screens/services-screen/services-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

import { CartScreenComponent } from './screens/cart-screen/cart-screen.component';
import { UserProfileScreenComponent } from './screens/user-profile-screen/user-profile-screen.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    AboutComponent,
    PromotionComponent,
    ServicesComponent,
    PortfolioComponent,
    ProductsComponent,
    TeamComponent,
    TestimonialComponent,
    AboutScreenComponent,
    ProductsScreenComponent,
    ServicesScreenComponent,
    HeaderComponent,
    LoginComponent,

    RegisterComponent,

    CartScreenComponent,
    UserProfileScreenComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, FormsModule],
})
export class HomeModule {}
