import { Component, OnInit } from '@angular/core';
import {PageComponent} from "../../components/page/page.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends PageComponent implements OnInit {
  programmingLanguages: string[] = [
    "Java",
    "PHP",
    "C++",
    "HTML",
    "CSS/Sass",
    "JavaScript/TypeScript",
    "Angular Framework",
    "Spring/Spring Boot Framework",
    "Unix",
    "Kafka",
    "Hazelcast",
  ];

  softwares: string[] = [
    "IntelliJ",
    "Eclipse",
    "Brackets/Sublime",
    "Adobe Suite",
    "Google Suite",
    "Microsoft Suite",
    "ProTools",
    "Minecraft"
  ];

  ngOnInit(): void {
  }

  setTitle() {
    PageComponent.pageTitle = "about";
  }

  setTitleClass() {
    PageComponent.pageTitleClass = "about-decorator";
  }
}
