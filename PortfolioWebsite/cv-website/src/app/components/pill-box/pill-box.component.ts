import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pill-box',
  templateUrl: './pill-box.component.html',
  styleUrls: ['./pill-box.component.scss']
})
export class PillBoxComponent implements OnInit {
  @Input() text?:string;
  @Input() class?:string;
  @Input() clickable:boolean = false;
  @Input() pills?:string[];

  constructor() { }

  ngOnInit(): void {
  }

}
