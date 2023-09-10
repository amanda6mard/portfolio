import {Component, OnInit} from '@angular/core';
import {PageComponent} from "../../components/page/page.component";
import {Project} from "../../model/project";
import {projects} from '../projects/projects';
import {NavState} from "../../components/nav/NavState";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent extends PageComponent implements OnInit {
  // @ts-ignore
  featuredProjects: Project[] = projects.filter(project => project.featured).sort((a, b) => a.featured < b.featured ? -1 : 1);

  ngOnInit(): void {
  }

  setNavState() {
    PageComponent.navStateValue = NavState.OVERLAY
  }

}
