import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
