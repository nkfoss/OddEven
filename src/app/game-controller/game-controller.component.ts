import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  @Output() intervalEmitter = new EventEmitter<number>();

  intervalStarted;
  emissionsCount = 0;

  constructor() { }

  ngOnInit() {
  }

  emissionFxn() {
    console.log("fired emission fxn")
    this.emissionsCount++;
    this.intervalEmitter.emit(this.emissionsCount)
  }

  onStartGame() {
    console.log("Started");
    this.intervalStarted = setInterval(this.emissionFxn.bind(this), 1000)
  }

  onStopGame() {
    clearInterval(this.intervalStarted);
    console.log("Stopped")

  }

}
