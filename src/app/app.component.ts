import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  // h3{
  // 	color: red;
  // }
  // `]
})
export class AppComponent {
    name = 'Akhil';
    username = '';
    showSecret =  false;
    log = [];

    // serverElements = [];

    onToggleDetails() {
    	this.showSecret = !this.showSecret;
    	// this.log.push(this.log.length + 1);
    	this.log.push(new Date());
    }

    serverElements =[{type:'server',name:'Testserver',content:'Just a test!'}];

    onServerAdded(serverData: {serverName:string,serverContent:string}) {
        this.serverElements.push({
            type:'server',
            name:serverData.serverName,
            content:serverData.serverContent
        });
    }

    onBluePrintAdded(blueprintData: {serverName:string,serverContent:string}) {
        this.serverElements.push({
            type:'blueprint',
            name:blueprintData.serverName,
            content:blueprintData.serverContent
        });
    }

}
