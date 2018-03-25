import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component/home.component';
import { Page404Component } from './page404/page.404.component';

const routes: Routes = [
    //{ path: 'home', component: HomeComponent },
    //{ path: 'about-us', component: XYZ },
    //{ path: 'products/:id', component: XYZ },
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
