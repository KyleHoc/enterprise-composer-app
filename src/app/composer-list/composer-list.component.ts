//Author: Kyle Hochdoerfer
//Title: composer-list.components.ts
//Date: 11/06/23
//Description: Typescript composer list component

//Import component, IComposer, and oninit from angular, and Observable from rxjs
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { Observable } from 'rxjs'

//Create and export a component for composer-list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  //Define an observable stream of IComposer
  composers: Observable<IComposer[]>

  //Create a new field for form control
  txtSearchControl = new FormControl('')

  //Create a constructor for the component
  constructor(private composerService: ComposerService) {
      //Set the composer array to equal the array of composer objects
      this.composers = this.composerService.getComposers()

      //Create a form control that activates 500ms after the text value is changed
      this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val))
   }

  ngOnInit(): void {
  }

  //Create a function to filter composers
  filterComposers(name: string){
    //Set the value of composers to a filtered list of composers
    this.composers = this.composerService.filterComposers(name)
  }

}
