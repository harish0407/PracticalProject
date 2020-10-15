import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from 'src/app/about-us/about-us.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { HomeComponent } from 'src/app/home/home.component';
import { OurProductComponent } from 'src/app/our-product/our-product.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { WhatWeDoComponent } from 'src/app/what-we-do/what-we-do.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'our-product', component: OurProductComponent},
  { path: 'what-we-do', component: WhatWeDoComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
