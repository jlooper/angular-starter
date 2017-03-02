import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
  private counter: number;
  private message: string;

  constructor() {}

  ngOnInit() {
    this.counter = 42;
    this.updateMessage();
  }

  updateCounter() {
    this.counter--;
    this.updateMessage();
  }

  private updateMessage() {
    if (this.counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
    } else {
      this.message = `${this.counter} taps left`;
    }
  }
}
