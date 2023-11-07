//Author: Kyle Hochdoerfer
//Title: app.component.ts
//Date: 11/06/23
//Description: Typescript file for app component

//Import component from Angular
import { Component } from '@angular/core';

//Create and export the app component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Declare a variable to display the assignment name
  assignment = "Assignment 4.4 - Async Pipe"
}
