import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "game-null";
  turnDone = "X";
  data;
  row_1 = new Array(3);
  row_2 = new Array(3);
  row_3 = new Array(3);
  fields = [this.row_1, this.row_2, this.row_3]



  makeTurn(event) {
    console.log(this.turnDone);
    console.log(event)
    this.turnDone === "X" ? this.turnDone = "0" : this.turnDone = "X";
  }
}
