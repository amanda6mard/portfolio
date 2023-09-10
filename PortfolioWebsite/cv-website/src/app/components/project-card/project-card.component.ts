import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from "../../model/project";

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project?:Project;
  @Output() imageClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  imageClicked(thumbnail: string) {
    this.imageClick.emit(thumbnail);
  }
}
