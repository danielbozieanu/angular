import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from "./about/about.component";

export const router: Routes = [
    { path: '', component: HomeComponent},
    { path: 'despre', component: AboutComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);