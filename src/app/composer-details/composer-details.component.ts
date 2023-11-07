//Author: Kyle Hochdoerfer
//Title: composer-details.components.ts
//Date: 10/30/23
//Description: Typescript composer details component

//Import Component, OnInit, IComposer, Composer Service, and Activated Route
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

//Create a composer details component
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
//Create and export a class for the details component
export class ComposerDetailsComponent implements OnInit {

  //Create composer ID and composer variables
  composerId: number;
  composer: IComposer;

  //Create a constructor with a route passed into its parameters
  constructor(private route: ActivatedRoute, private ComposerService: ComposerService) {
    //Access the composer ID selected when the user navigates to a composer details page
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    //If a composer ID is passed found
    if(this.composerId){
      //Set the selected composer
      this.composer = this.ComposerService.getComposer(this.composerId)
    }
   }

  ngOnInit(): void {
  }

}
