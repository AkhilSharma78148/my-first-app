import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

	newServerName = '';
    newServerContent = '';


  constructor() { }

  ngOnInit(): void {
  }

   	onAddServer() {
        // this.serverElements.push({
        //     type:'server',
        //     name:this.newServerName,
        //     content:this.newServerContent
        // });
    }

    onAddBluePrint() {
        // this.serverElements.push({
        //     type:'blueprint',
        //     name:this.newServerName,
        //     content:this.newServerContent
        // });
    }

    onReset() {
        // this.newServerName = '';
        // this.newServerContent = ''; 
        // this.serverElements = [];
    }

}
