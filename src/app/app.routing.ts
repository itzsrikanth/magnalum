import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages 
import { HomeComponent } from './home.component/home.component';
import { Page404Component } from './pages/page404/page.404.component';
import { AboutUsComponent } from './pages/aboutUs/aboutUs.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'products/:id', component: ProductComponent },
    //{ path: 'research', component: XYZ },
    //{ path: 'contact-us', component: XYZ }
    { path: '', component: HomeComponent },
    { path: '**', component: Page404Component },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
