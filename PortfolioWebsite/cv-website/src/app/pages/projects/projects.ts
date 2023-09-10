import {Project} from "../../model/project";
export const projects:Project[] = [
  {
    title: "Data Pipeline Renovations - Collateral Management Domain",
    thumbnails: [],
    description: "This project involved renovating a data pipeline from a batch-based system to an event-driven system." +
      "\n\nIn the course of this project, my team set up brand new infrastructure for position keeping, including using Hazelcast and Kafka, to support a realtime, event-driven way of managing data. The goal was to move away from a batch-based system that was largely dependent on database processing and make collateral data available much earlier in the day.",
    programmingLanguages: ["Java", "SQL"],
    otherSoftware: ["REST APIs", "Gradle", "Git", "Jenkins", "Kafka", "Hazelcast", "Cucumber"],
    featured: 3
  },
  {
    title: "Data Reconciliation Tools - Collateral Management Domain",
    thumbnails: [],
    description: "In the context of renovating a data pipeline from a batch-based system to an event-driven system, it was critical to ensure that both systems provided identical sets of data." +
      "\n\nI played a big role in th analysis of the initial cuts of data and identifying the gaps in the new sources of data. As part of this effort, I worked on a user interface that allowed easy parsing of the breaking data, as well as developing processes to programmatically assign known causes for breaks in order to make managing new data much easier." +
      "\n\nThis work required good analysis skills for identifying patterns, good skills at reverse engineering code to figure out how data was processed in poorly-documented legacy systems, as well as an understanding of how to make large amounts of data easy for a user to consume.",
    programmingLanguages: ["Java", "Angular", "SQL"],
    otherSoftware: ["REST APIs", "Gradle", "Git", "Jenkins", "DataBolt", "Hazelcast", "Cucumber"],
    featured: 4
  },
  {
    title: "Bakery Website",
    thumbnails: ["bakery-website-products.png", "bakery-website-product.png", "bakery-website-wishlist.png"],
    linkToProject: "https://portfolio.wickedwriting.ca/bakerywebsite/",
    linkToCode: "https://github.com/amanda6mard/portfolio/tree/main/BakeryWebsite",
    description: "I developed this website as part of an advance web-development learning exercise. This involved creating back-end REST APIs using Java. The front-end was developed in Angular, making use of Bootstrap for styling." +
      "\n\nFor ease of deployment, the project displayed at the link below uses hardcoded JavaScript objects to populate the information. However, the code shared on GitHub includes the REST api code, as well as the code for both the hardcoded and REST reliant versions of the front end.",
    programmingLanguages: ["Angular", "JavaScript", "JavaScript/TypeScript", "CSS", "CSS/Sass", "Bootstrap", "Java"],
    otherSoftware: ["REST APIs", "Maven"],
    featured: 1
  },
  {
    title: "Charity Website",
    thumbnails: ["charity-home.png", "charity-donate.png", "charity-ourWork.png", "charity-about.png"],
    linkToProject: "https://portfolio.wickedwriting.ca/charityapp/home/",
    linkToCode: "https://github.com/amanda6mard/portfolio/tree/main/CharityWebsite",
    description: "This sample website makes ample use of JavaScript to deal with form processing - including functionalities such as validation and dynamic form rendering." +
      "\n\nWith this project, I took the opportunity to experiment with encapsulating various aspects of the website in pure JavaScript components.",
    programmingLanguages: ["HTML", "CSS", "JavaScript"],
    otherSoftware: ["HTTP cookies"],
    featured: 2
  },
  {
    title: "Bookmarking Application",
    thumbnails: ["bookmarker-bookmarks.png", "bookmarker-add.png", "bookmarker-home.png", "bookmarker-validation.png"],
    linkToProject: "http://portfolio.wickedwriting.ca/bookmarker/home/",
    linkToCode: "https://github.com/amanda6mard/portfolio/tree/main/Bookmark%20Application/bookmarker",
    description: "This project was completed as a university assignment. The primary objective was to explore PHP, including loading data from a database, and making use of front-end and back-end validation." +
      "\n\nMy design incorporated responsive elements beyond the scope of the assignment, though the UI was conceived primarily for use through a desktop browser (Chrome in particular).",
    programmingLanguages: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
    featured: 5
  },
  {
    title: "This Portfolio Website",
    thumbnails: [],
    linkToProject: "../",
    linkToCode: "",
    description: "I created this website using the Angular framework. The various aspects of the website are encapsulated in reusable components. " +
      "Written content (like you are reading right now) is mostly saved in TypeScript objects." +
      "\n\nThe site is styled from scratch using CSS/Sass, and does NOT make use of any styling frameworks. At this moment in time, the site is mainly conceived for use on desktops, with limited responsiveness." +
      "\n\nAll site functionality, including the project filtration and image modals on this page, was also coded from scratch using Angular/JavaScript.",
    programmingLanguages: ["HTML", "CSS", "CSS/Sass", "JavaScript", "JavaScript/TypeScript", "Angular"],
  },
  {
    title: "Utility Application",
    thumbnails: ["metro-purple.png","metro-green.png","metro-blue.png","meas-converter.png","mortgage-calc.png"],
    linkToProject: "http://portfolio.wickedwriting.ca/utility/",
    linkToCode: "https://github.com/amanda6mard/portfolio/tree/main/UtilityApp",
    description: "This project was completed as a university assignment. The primary objective was to explore JavaScript. The project consisted of building: " +
      "\n - A measurement converter" +
      "\n - A mortgage calculator" +
      "\n - A third utility, up to the student. In this case, a metronome" +
      "\n\n Additionally, the project encouraged exploring styling with CSS. My design further included front-end validation on form fields, as well as considered responsiveness, and my metronome included user experience functions outside the scope of the assignment. Designed primarily for Chrome.",
    programmingLanguages: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Slideshow Application",
    thumbnails: ["slideshow-1.png", "slideshow-2.png"],
    linkToProject: "http://portfolio.wickedwriting.ca/slideshow/",
    linkToCode: "https://github.com/amanda6mard/portfolio/tree/main/SlideshowApp",
    description: "This project was completed as a university assignment. The primary object was to explore the <canvas> element in HTML, in conjunction with Javascript and CSS styling." +
      "\n\nThe assignment included creating an 'effect' of the students choice. I added a color overlay, coding the color picker from scratch.",
    programmingLanguages: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Saint-Francis of Assisi Parish Website",
    thumbnails: ["saint-francis-home.png", "saint-francis-contact.png"],
    linkToProject: "http://www.saintfrancisparish.ca/",
    linkToCode: "",
    description: "In 2018, I volunteered to replace the outdated website for St-Francis of Assisi Parish. The main functions I concentrated on were: enabling easy updating and download of the weekly bulletin, connection to all social media accounts, and making all the information that was regularly updated easy to modify." +
      "\n\nThe website is coded in PHP. Initial mock-ups of the site were created in Adobe XD.",
    programmingLanguages: ["PHP", "HTML","CSS/Sass", "CSS"],
    otherSoftware: ["Adobe XD"],
  },



];
