import { Component, OnInit } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public products:any[] = [
    {
      title: "Jeans",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
      img:"http://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20%281%29.jpg",
      price: 89
    },
    {
      title: "Grey Sweater",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
      img:"http://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20%282%29.jpg",
      price: 108
    },
    {
      title: "Leather Handbag",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
      img:"http://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(38).jpg",
      price: 206
    },
    {
      title: "Pink Backpack",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
      img:"http://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(40).jpg",
      price: 169
    },
    {
      title: "Black Sneakers",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
      img:"http://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(42).jpg",
      price: 96
    },
    {
      title: "Summer Pack",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
      img:"http://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20%284%29.jpg",
      price: 305
    }            
  ];

  constructor() { }

  ngOnInit() {
      $(".sticky").sticky({
        topSpacing: 90,
        zIndex: 2,
        stopper: ".page-footer"
      });    
  }

}
