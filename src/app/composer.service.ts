//Author: Kyle Hochdoerfer
//Title: composer.service.ts
//Date: 11/06/23
//Description: Typescript service for composer class

//Import injectable from Angular, and the Composer interface
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs'
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

//Create injectable provided in root, and export the Composer service
@Injectable({
  providedIn: 'root'
})
export class ComposerService {

   //Create an array of IComposer objects
   composers: Array<IComposer>;

   //Create a constructor to initialize the array with composer objects
   constructor() {
     this.composers = [
       {
         composerId: 100, fullName: "Ludwig Van Beethoven", genre: "Classical"
       },
       {
         composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
       },
       {
         composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
       },
       {
         composerId: 103, fullName: "Johannes Brahms", genre: "Classical"
       },
       {
         composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
       }
     ]
   }

   //Declare a method for returning all composer objects
    getComposers(): Observable<IComposer[]> {
     //Return the array of composers
     return of(this.composers);
   }

   //Declare a method for returning a specified composer based on id
   getComposer(composerId: number) : IComposer {
     //For every composer object in the array:
     for (let composer of this.composers) {
       //If the composer Id equals the id parameter, return that composer
       if (composer.composerId === composerId) {
         return composer;
       }
     }
   }

   //Declare a function for filtering composers that returns an array of observable IComposer objects
   filterComposers(name: string) : Observable<IComposer[]> {
    //Return an array of composer objects that include the name parameter in the fullName variable
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
   }
}
