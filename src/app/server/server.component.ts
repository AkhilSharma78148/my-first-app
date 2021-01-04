import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

	serverId: number = 11;
	serverStatus: string = "offline";

	getServerStatus() {
		return this.serverStatus;
	}
}
