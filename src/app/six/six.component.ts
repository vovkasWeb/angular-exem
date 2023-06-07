import { Component } from "@angular/core";
import { SharedService } from "../shared.service";
// API KEY - 4O7kxB74PxdUdOoK17f0pcqLZn4kJAmUDJrWYgbt

@Component({
  selector: "app-six",
  templateUrl: "./six.component.html",
  styleUrls: ["./six.component.css"],
})
export class SixComponent {
  inputValue: string = "";
  constructor(private sharedService: SharedService) {}

  saveInput() {
    console.log(this.inputValue);
    if (this.inputValue.length != 40) {
      console.log("введите ключь");
    }
    this.sharedService.key = this.inputValue;
    this.sharedService.acess = true;
  }
  openLink() {
    const url = "https://api.nasa.gov";
    window.open(url, "_blank");
  }
}
