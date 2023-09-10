import { Component, OnInit } from '@angular/core';
import {PageComponent} from "../../components/page/page.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends PageComponent implements OnInit {
  setTitle():void {
    PageComponent.pageTitle = "contact";
  }

  setTitleClass() {
    PageComponent.pageTitleClass = "contact-decorator";
  }
}
