export interface CV {
  name:string,
  jobTitle:string,
  languages?:string,
  experience:Experience[],
  projects:Experience[],
  skills:string[],
  education:Education[],
  otherSkills:string[],
  software:string[]
}

export interface Experience {
  title:string,
  startDate:Date,
  endDate?:Date,
  company:string,
  descriptionIntro:string,
  descriptionPoints:string[]
}

export interface Education {
  degree:string,
  startDate:Date,
  endDate?:Date,
  school:string,
  descriptionIntro:string,
  descriptionPoints:string[]
}
