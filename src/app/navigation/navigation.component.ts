import { Component, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(throttleTime(10), map(() => window.pageYOffset), pairwise());
  }

}
