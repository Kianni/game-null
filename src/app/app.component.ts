import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "game-null";

  turnDone = "X";

  row_1 = new Array(3);
  row_2 = new Array(3);
  row_3 = new Array(3);
  fields = [this.row_1, this.row_2, this.row_3]
  // rowNum;
  // colNum;



  makeTurn(fieldID) {
    // console.log(this.turnDone);
    console.log(fieldID)
    // this.fields[fieldID[0]][fieldID[1]] = this.turnDone;
    // this.determineRow(fieldID);
    // this.determineColumn(fieldID);
    // this.setSignIntoField();
    this.fields[0][0] = "A"; // this string causes a bug
    console.log(this.fields);
    this.turnDone === "X" ? this.turnDone = "0" : this.turnDone = "X";
  }

  // determineRow(fieldID) {
  //   switch (fieldID[0]) {
  //     case "0": {
  //       // console.log("eka rivi");
  //       this.rowNum = 0;
  //       console.log("row num: ", this.rowNum);
  //       break;
  //     }
  //     case "1": {
  //       // console.log("toka rivi");
  //       this.rowNum = 1;
  //       console.log("row num: ", this.rowNum);
  //       break;
  //     }
  //     case "2": {
  //       // console.log("kolmas rivi");
  //       this.rowNum = 2;
  //       console.log("row num: ", this.rowNum);
  //       break;
  //     }
  //   }
  // }

  // determineColumn(fieldID) {
  //   switch (fieldID[1]) {
  //     case "0": {
  //       // console.log("eka sarake");
  //       this.colNum = 0;
  //       console.log("col num: ", this.colNum);
  //       break;
  //     }
  //     case "1": {
  //       // console.log("toka sarake");
  //       this.colNum = 1;
  //       console.log("col num: ", this.colNum);
  //       break;
  //     }
  //     case "2": {
  //       // console.log("kolmas sarake");
  //       this.colNum = 2;
  //       console.log("col num: ", this.colNum);
  //       break;
  //     }
  //   }
  // }

  // setSignIntoField() {
  //   // this.fields[this.rowNum][this.colNum] = this.turnDone;
  //   console.log(this.fields);
  //   this.fields[this.rowNum][this.colNum] = "A";

  // }
}
