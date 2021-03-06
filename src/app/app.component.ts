import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddCounts = [];
  evenCounts = [];

  onGameStarted(emissionsCount: number) {
    if (emissionsCount % 2 == 0) {
      this.evenCounts.push(emissionsCount)
    }
    else {
      this.oddCounts.push(emissionsCount)
    }
    console.log("number pushed!")
  }

}
