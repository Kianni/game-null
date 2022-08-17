import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.css"],
})
export class FieldComponent implements OnInit {
  @Output() sign = new EventEmitter<any>();
  @Input() makeSign: string;
  nollOrCross = "...";
  @Input() elID;

  constructor() { }

  ngOnInit(): void {
  }

  onTurn() {
    this.sign.emit(this.elID);
    this.nollOrCross = this.makeSign;
  }
}
