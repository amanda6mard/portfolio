import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {
  @Input() text?:string;
  @Input() class?:string;
  @Input() clickable:boolean = false;
  @Input() isLast?:boolean;

  constructor() { }

  ngOnInit(): void {
    if(this.isLast){
      this.class += " last-pill";
    }
  }

}
