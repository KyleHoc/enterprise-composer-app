//Author: Kyle Hochdoerfer
//Title: app-routing.module.ts
//Date: 10/25/23
//Description: Routing for composer list

//Import all modules and components
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

//Set up routing for the composer list, contact, and about pages
const routes: Routes = [
  {
    //Set the default route to the composer list component
    path: '',
    component: ComposerListComponent
  },
  {
    //Create a non-default path to the composer-list component
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    //Create a path to the composer details component, including an ID number to determine which
    //  composer is navigated to
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
  {
    //Create a path to the contact component
    path: 'contact',
    component: ContactComponent
  },
  {
    //Create a path to the about component
    path: 'about',
    component: AboutComponent
  }
];

//Create and export the module with its imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
