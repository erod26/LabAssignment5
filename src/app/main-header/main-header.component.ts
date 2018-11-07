import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private firstName: string;
  private lastName: string;
  private surprise: string;

  constructor(private router: Router) {
    this.firstName = "Eric";
    this.lastName = "Rodriguez";
    // this.surprise = "Bonjour!";
  }

goToPage(path: string) {
  this.router.navigate([path]);
}

  showGreeting() {

    const banner = document.getElementById('banner');
    banner.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + ', I take it you are having a good day' + '?';

  }
  hideGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'r1c2';
  }
  showSurprise() {
    const banner = document.getElementById('banner');
    banner.innerHTML= this.surprise;
  }
  hideSurpise() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'r1c1';
  }
  ngOnInit() {
  }

}
