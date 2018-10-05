import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {

  private message: string;
  private hello: string; 

  constructor() {
    this.message = "Look above dummy.";
    this.hello = "Hello my computer.";
  }
  showMessage() {
    const rando = document.getElementById('rando');
    rando.innerHTML = 'The message you looking for is elsewhere' + "," + ' ' + this.message + "."
  }

  hideMessage() {
    const rando = document.getElementById('rando');
    rando.innerHTML = 'r3c2';
  }

  showHello() {
    const ricter = document.getElementById('ricter');
    ricter.innerHTML = 'What do we say?' + "," + ' ' + this.hello + ".";
  }
  hideHello() {
    const ricter = document.getElementById('ricter');
    ricter.innerHTML = 'r3c3'
  }

  ngOnInit() {
  }

}
