import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-app';
  transferencias: any[] = [];

  transferir($event: any) {
    this.transferencias?.push($event);
    console.log($event);
  }
}
