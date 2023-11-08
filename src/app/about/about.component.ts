//Author: Kyle Hochdoerfer
//Title: about.component.ts
//Date: 11/06/23
//Description: Typescript file for about component

//Import Component and OnInit from Angular
import { Component, OnInit } from '@angular/core';

//Create and export the about component
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //Leave the component constructor blank
  constructor() { }

  ngOnInit(): void {
  }

}
