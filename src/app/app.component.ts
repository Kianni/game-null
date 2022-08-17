import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "game-null";

  turnDone = "X";
  gameOver = false;
  nobodyWon = false;
  counter = 0;

  row_1 = new Array(3);
  row_2 = new Array(3);
  row_3 = new Array(3);
  fields = [this.row_1, this.row_2, this.row_3];

  game_row_1 = new Array(3);
  game_row_2 = new Array(3);
  game_row_3 = new Array(3);
  dataFields = [this.game_row_1, this.game_row_2, this.game_row_3];

  makeTurn(fieldID) {
    this.dataFields[fieldID[0]][fieldID[1]] = this.turnDone;
    this.checkResult();
    // this.computersTurn();
    this.toggleXO();
    this.counter++;
    this.counter == 9 && !this.gameOver ? (this.nobodyWon = true) : null;
  }

  // getRndInteger() {
  //   return Math.floor(Math.random() * 3);
  // }

  // computersTurn() {
  //   this.dataFields[this.getRndInteger()][this.getRndInteger()] = this.turnDone;
  // }

  toggleXO() {
    this.turnDone === "X" ? (this.turnDone = "0") : (this.turnDone = "X");
  }

  checkResult() {
    for (let i = 0; i <= 2; i++) {
      // check horisontal
      this.checkArr(this.dataFields[i]);

      // check vertical
      this.checkArr(
        new Array(
          this.dataFields[0][i],
          this.dataFields[1][i],
          this.dataFields[2][i]
        )
      );
    }
    // check diagonal
    this.checkArr(
      new Array(
        this.dataFields[0][0],
        this.dataFields[1][1],
        this.dataFields[2][2]
      )
    );
    this.checkArr(
      new Array(
        this.dataFields[0][2],
        this.dataFields[1][1],
        this.dataFields[2][0]
      )
    );
  }

  checkArr(arr) {
    if (
      (arr[0] == "X" || arr[1] == "0") &&
      arr[0] == arr[1] &&
      arr[0] == arr[2]
    ) {
      this.gameOver = true;
      this.toggleXO();
    }
  }
}
