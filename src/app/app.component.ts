import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "game-null";
  turnDone = "X";

  makeTurn() {
    this.turnDone = "0";
  }
}
