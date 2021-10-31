import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showModal(){
    this.show = true
  }
}
