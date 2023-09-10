import {Component} from '@angular/core';
import {NavState} from "./components/nav/NavState";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv-website';
  navState:NavState = NavState.BOX;
  navClass:string ="";

  setNavState(state: NavState){
    this.navState = state;
    switch (this.navState){
      case NavState.BOX:
        this.navClass = "box";
        break;
      case NavState.OVERLAY:
        this.navClass = "overlay";
        break;
      case NavState.HIDDEN:
        this.navClass = "hidden";
        break;
    }
  }
}
