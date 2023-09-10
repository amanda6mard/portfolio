import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Toggle} from "../../model/toggle";

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() toggle?:Toggle;
  @Output() toggleEvent = new EventEmitter<Toggle>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleState():void {
    if(this.toggle && (this.toggle.clickableWhenTrue || !this.toggle.state)){
      this.toggle.state = !this.toggle.state;
      this.toggleEvent.emit(this.toggle);
    }
  }

}
