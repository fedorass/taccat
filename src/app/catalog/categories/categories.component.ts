import { Component, OnInit } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".sticky").sticky({
      topSpacing: 90,
      zIndex: 2,
      stopper: ".page-footer"
    });  
  }

}
