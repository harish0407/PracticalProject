import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.css']
})
export class OurProductComponent implements OnInit {
  public title: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'Our product list';
  }

}
