import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //By elements
  // selector: '[app-servers]', //By attribute
  // selector: '.app-servers', //By class
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  // 			<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer = false;


  	constructor() {
		setTimeout(() => { //setTimeout javascript function using ES6 Arrow function
			this.allowNewServer = true;
		},2000);

  	}

  	// ngOnInit(): void {
  	// }

}
