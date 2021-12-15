import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() titulo: string;


  constructor() {}

  ngOnInit(): void {
  }

  volver() {
    window.history.back()
  }

}
