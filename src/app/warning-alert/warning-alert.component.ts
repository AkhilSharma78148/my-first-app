import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  // templateUrl: './warning-alert.component.html',
  // styleUrls: ['./warning-alert.component.css']
  template: `<p>Warning message</p>`,
  styles: [
  	`
	  p {
	  	background-color: red;
	  	padding:20px;
	  	border: 1px solid red;
	  }
  	`
  ] 
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
