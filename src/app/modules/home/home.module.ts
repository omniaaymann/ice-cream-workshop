import { AboutComponent } from './components/about/about.component';
import { AboutScreenComponent } from './screens/about-screen/about-screen.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CartScreenComponent } from './screens/cart-screen/cart-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsScreenComponent } from './screens/products-screen/products-screen.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesScreenComponent } from './screens/services-screen/services-screen.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { UserProfileScreenComponent } from './screens/user-profile-screen/user-profile-screen.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


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
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class HomeModule {}
