import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {NavState} from "./NavState";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input()
  class:string = "";

  constructor() { }

  ngOnInit(): void {
  }
}
