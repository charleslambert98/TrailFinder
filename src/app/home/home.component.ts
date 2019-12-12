import { Component, OnInit } from '@angular/core';
import { LOCATIONS } from './locations';
import { ACTIVITIES } from './activities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locations = LOCATIONS;
  activities = ACTIVITIES;

  constructor() { }

  ngOnInit() {
    console.log(this.locations);
  }

}
