import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output serverCreated     = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output blueprintCreated  = new EventEmitter<{serverName:string, serverContent:string}>();

	newServerName = '';
  newServerContent = '';


  constructor() { }

  ngOnInit(): void {
  }

   	onAddServer() {
        this.serverCreated.emit({
            type:'server',
            serverName:this.newServerName,
            serverContent:this.newServerContent
        });
    }

    onAddBluePrint() {
        this.blueprintCreated.emit({
            type:'server',
            serverName:this.newServerName,
            serverContent:this.newServerContent
        });
    }

    onReset() {
        // this.newServerName = '';
        // this.newServerContent = ''; 
        // this.serverElements = [];
    }

}
