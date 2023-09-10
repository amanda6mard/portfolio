import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input()
  open!: boolean;

  @Output()
  closedClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  image?: string;

  constructor() { }

  ngOnInit(): void {
  }

  close(event: MouseEvent) {
    if(event.target != null && event.target instanceof Element){
      if((event.target as Element).nodeName !== "IMG"){
        this.closedClicked.emit();
      }
    }
  }
}
