import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // stylesUrls: ['./server.component.css']
  styles: [`
  	.online {
  		color: white;
  	}
  	.offline {
  		color: yellow;
  	}
  `]
})
export class ServerComponent implements OnInit {

	serverId: number = 11;
	serverStatus: string = "offline";

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
	}

	getServerStatus() {
		return this.serverStatus;
	}

	getColor() {
		return this.serverStatus === 'online' ? 'green' : 'red';
	}

	setTextColor() {
		return this.serverStatus === 'online' ? 'black' : 'yellow';	
	}

	ngOnInit(): void {
  	}

}
