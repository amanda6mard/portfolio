import {Component, OnInit} from '@angular/core';
import {PageComponent} from "../../components/page/page.component";
import {Project} from "../../model/project";
import {Toggle} from "../../model/toggle";
import {projects} from "./projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends PageComponent implements OnInit {

   projects: Project[] = projects;
   displayProjects:Project[] = [];

   toggles:Toggle[] = [];
   modalOpen: boolean = false;
   modalImage: string = "";

  ngOnInit(): void {
    this.displayProjects = this.projects;
    let languages:string[] = [];
    this.toggles.push({
      text: "All",
      state: true,
      clickableWhenTrue: false
    });
    for(let project of this.projects) {
      for (let lang of project.programmingLanguages) {
        if (!languages.includes(lang)) {
          languages.push(lang);
          this.toggles.push({
            text: lang,
            state: false,
            clickableWhenTrue: true
          })
        }
      }
    }
    this.toggles.sort((a, b) => a.text === "All" ? -2 : b.text === "All" ? 2 : a.text.toUpperCase() < b.text.toUpperCase() ? -1 : 1);
  }

  setTitle() {
    PageComponent.pageTitle = "projects";
  }

  setTitleClass() {
    PageComponent.pageTitleClass = "projects-decorator";
  }

  toggle(toggleObject:Toggle):void {
    if(toggleObject.text === "All"){
      //all others get turned off
      for(let toggle of this.toggles){
        if(toggle.text !== "All"){
          toggle.state = false;
        }
      }
    } else {
      //if all others turned off, all gets turned on
      let allOff = true;
      for(let toggle of this.toggles){
        if(toggle.text !== "All" && toggle.state === true){
          allOff = false;
          break;
        }
      }
      if(allOff){
        this.toggles[0].state = true;
      } else {
        //else all gets turned off
        this.toggles[0].state = false;
      }
    }
    this.setDisplayProjects();
  }

  setDisplayProjects():void {
    this.displayProjects = this.projects;
    //if all is off, filter shown projects
    if(!this.toggles[0].state) {
      let allowedLanguages: string[] = [];
      for (let toggle of this.toggles) {
        if (toggle.state) {
          allowedLanguages.push(toggle.text);
        }
      }
      this.displayProjects = this.displayProjects.filter(project => {
        let allowed = false;
        for (let lang of allowedLanguages) {
          if (project.programmingLanguages.includes(lang)) {
            allowed = true;
            break;
          }
        }
        return allowed;
      });
    }
  }
  imageClicked(image: string) {
    this.modalOpen = true;
    this.modalImage = image;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
