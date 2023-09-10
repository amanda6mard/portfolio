import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PageComponent} from "../../components/page/page.component";
import {CV} from "../../model/cv";
import {myCV} from "./myCV";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']})
export class CvComponent extends PageComponent implements OnInit {
  cv:CV = myCV;

  setTitle():void {
    PageComponent.pageTitle = "cv";
  }

  setTitleClass() {
    PageComponent.pageTitleClass = "cv-decorator";
  }

  print() {
    window.print();
  }
}
