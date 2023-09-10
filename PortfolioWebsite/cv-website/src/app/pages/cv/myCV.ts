import {CV} from "../../model/cv";

export let myCV: CV;
myCV = {
  name: "Amanda Simard",
  jobTitle: "Java and Web Developer",
  languages: "English and French",
  experience: [
    { title: "Java Developer",
      startDate:  new Date(2021, 9),
      endDate: new Date(),
      company: "Morgan Stanley",
      descriptionIntro: "Integral part of a team charged with the renovation of a data pipeline in the collateral management domain. Work included creating APIs and UIs to assist the business in assessing and fixing the gaps in the data quality.",
      descriptionPoints: ["Developed microservices in an agile manor using the Java Spring Framework on the backend, Kafka for messaging, Cucumber and JBehave for integration testing, Mockito and JUnit for unit testing, and the Angular framework for the UI",
        "Charged with developing the ui for various data reconciliation initiatives",
        "Provided critical analysis of code and data to derive the requirements of the renovated pipeline",
        "Mentored fellow developers and provided peer reviews of code",
        "Documented data flows between multiple systems and conducted a number of knowledge-share sessions to help direct pipeline architectural decisions",
        "Participated in varied teaching/learning initiatives aimed at preparing the team toward designing apps using a cloud-ready ideology"
      ]
    },
    { title: "Java Consultant",
      startDate:  new Date(2021, 7),
      endDate: new Date(),
      company: "FDM Group",
      descriptionIntro: "Trained to meet FDM Group's standards for Java developers.",
      descriptionPoints: ["Excelled in all bootcamp coding courses, which covered topics such as the Spring Framework and the Angular Framework, as well as putting into practice concepts such as load balancing and parallel processing",
        "Developed many example websites and REST apis over the course of several weeks",
        "Polished skills in version control (Git), documentation, and agile work methods",
        "Refreshed knowledge of Java, SQL, HTML, CSS, JavaScript, Unix"
      ]
    },
    { title: "Communications and Social Media",
      startDate:  new Date(2018, 0, 1),
      endDate: new Date(2018, 6, 1),
      company: "Computers for Success Canada",
      descriptionIntro: "Responsible for creating various web-based marketing materials as well as maintaining social media platforms.",
      descriptionPoints: ["Instrumental in fixing the Google Ads account to comply with new rules, raising click-through rate from under 2% to over 7% in the process",
      "Participated in web redesign, developing mock-ups and wireframes, and also created landing pages and quiz pages using WordPress, and p",
      "Developed social media marketing campaigns and created related written and graphic content, emphasizing SEO best practices"]
    },
  ],
  projects: [],
  skills: ["Java", "PHP", "Spring/Spring Boot", "Angular", "HTML", "CSS/Sass", "JavaScript/TypeScript", "Kafka", "Hazelcast", "Basic cloud concepts","Unix","Shell scripting","C++","React","Lisp","Ruby","Pearl"],
  education: [
    {
      degree: "Software Engineering & More | Varied Coursework",
      school: "Concordia University",
      startDate: new Date(2020,1),
      descriptionIntro: "",
      descriptionPoints: ["The Software Process", "Data Structures and Algorithms", "Computer Graphics", "Principles of Programming Languages", "Advanced Object-Oriented Programming"]
    },
    {
      degree: "Bachelor of General Studies in Arts and Science",
      school: "Athabasca University",
      startDate: new Date(2018,10),
      endDate: new Date(2019,11),
      descriptionIntro: "",
      descriptionPoints: ["Java for Programmers", "C++ for Programmers", "Database Management", "Overview of E-Commerce", "Advanced Technology for Web-Based Systems", "Introduction to Game Design"]
    },
    {
      degree: "Degree in Professional Writing",
      school: "Algonquin College",
      startDate: new Date(2015,8),
      endDate: new Date(2017, 4),
      descriptionIntro: "",
      descriptionPoints: ["Writing for Business", "Writing for the Web", "Substantive and Literary Editing"]
    },
  ],
  otherSkills: ["Writing/Editing", "Sound Production"],
  software: ["IntelliJ", "Eclipse", "Brackets", "Sublime", "Google Suite", "Microsoft Suite", "Adobe Suite", "ProTools", "Minecraft"],
};
