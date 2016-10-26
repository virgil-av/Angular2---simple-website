import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];


export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)