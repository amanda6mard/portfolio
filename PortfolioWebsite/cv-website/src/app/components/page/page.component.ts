import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {NavState} from "../nav/NavState";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  pageComponent = PageComponent;
  static pageTitle?:string;
  static pageTitleClass?:string;
  useContentContainer:boolean = false;
  static navStateValue:NavState = NavState.BOX;
  @Output() navState = new EventEmitter<NavState>();

  constructor(private router:Router) {
      router.events.subscribe(event =>
      {
        if( event instanceof NavigationEnd ){
          let currentRoute:string = event.url;
          this.useContentContainer = currentRoute !== "/";
        }
      });
    this.setTitle();
    this.setTitleClass();
    this.setNavState();
  }

  ngOnInit(): void {

  }

  setTitle():void {
    PageComponent.pageTitle = undefined;
  }
  setTitleClass():void {
    PageComponent.pageTitleClass = undefined;
  }
  setNavState():void {
    PageComponent.navStateValue = NavState.BOX;
    this.navState.emit(PageComponent.navStateValue);
  }
}
