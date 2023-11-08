//Author: Kyle Hochdoerfer
//Title: contact.component.ts
//Date: 11/06/23
//Description: Typescript file for contact component

//Import Component and OnInit from Angular
import { Component, OnInit } from '@angular/core';

//Create amd export the contact component
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //Leave the component constructor blank
  constructor() { }

  ngOnInit(): void {
  }

}
