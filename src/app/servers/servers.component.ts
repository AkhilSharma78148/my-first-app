import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //By elements
  // selector: '[app-servers]', //By attribute
  // selector: '.app-servers', //By class
  // templateUrl: './servers.component.html',
  template: `<app-server></app-server>
  			<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
