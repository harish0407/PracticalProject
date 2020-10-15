import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-nav-bar',
  templateUrl: './common-nav-bar.component.html',
  styleUrls: ['./common-nav-bar.component.css']
})
export class CommonNavBarComponent implements OnInit {
 @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
