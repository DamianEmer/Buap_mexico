import { Component, OnInit } from '@angular/core';

export interface Person {
  personId: number;
  fullname: string;
  picture: string;
  career: string;
  coriousFact: string;
  igem: string;
  phrase: string;
  opinion: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  collaborators: Person[] = [
    {
      personId: 1,
      fullname: 'Andrea N. Tlaxcalteca',
      picture: '../../../assets/images/team/collaborators/s500_AndreaTl.png',
      career: 'bio-pharmaceutical chemist',
      coriousFact: 'When I choose my career I didn’t like biology but over time I knew good teachers that inspire me to give me an opportunity to enter this area.',
      igem: 'I like the laboratory activities, but I only have been in chemistry laboratory, so I thought that it would be a good idea to do activities in other area. Also I like the idea that iGEM have about science in young people, as well as the multidisciplinarity that this project requires',
      phrase: '',
      opinion: 'If i could change something about Science in México, it would be the budget that we have for this and give importance to the divulgation of science to the general public'
    },
    {
      personId: 2,
      fullname: 'Angel E. Plascencia',
      picture: '../../../assets/images/team/collaborators/s500_AngelPl.png',
      career: 'Mathematics',
      coriousFact: 'When I was a child I did memorize first 100 digits of Pi. Nowadays I only can remember a few of them.      ',
      igem: "I've been learning a lot of theorems and similar stuff for a few years, but actually I had not had a real chance to know what mathematics can do for us, and that's why I'm in iGEM, because I've had such chance.",
      phrase: '',
      opinion: "I would like improve how actually people looks at science in Mexico. I mean, I would like people don't think that science is worthless and unnecessary, instead of that I would like people have confidence in science."
    },
    {
      personId: 3,
      fullname: 'Araxie Molina',
      picture: '../../../assets/images/team/collaborators/s500_AraxieMo.png',
      career: 'Biotechnology',
      coriousFact: 'When I was a kid I used to eat flower petals and the pH of my tears is very acid, so when I cry it burns',
      igem: "It's an unique experience where I can develop my skills and watch others doing it while I get to socialize with other people from all around the world but the best part is to share my ideas and knowledge and encourage other people",
      phrase: '',
      opinion: "I will improve the impact of it and I will try to turn the science into something that everybody could see, touch, want and understand; making it for everyone"
    },
    {
      personId: 4,
      fullname: 'Cristobal Baez',
      picture: '../../../assets/images/team/collaborators/s500_CristobalBa.png',
      career: 'Art and humanities.',
      coriousFact: 'I like to use sweatshirts, at all kind of weather. I have more than 20 in my collection',
      igem: "I'm interested in the posibility of present science projects in an alternate way, with interactive elements (like games)",
      phrase: '',
      opinion: 'One of the worst problems that I have seen in the general branches of the science, is the presentation of the project, scope and details, that in a general public and investors, are hard to understand concepts. Tools, such as custom games, animations and other elements for each project, improve the reception and comprehension of what the project, has to offer.'
    },
    {
      personId: 5,
      fullname: 'Emilio Tlaxcalteca',
      picture: '../../../assets/images/team/collaborators/s500_EmilioTl.png',
      career: 'Biology',
      coriousFact: '',
      igem: 'I am on igem because I can do synthetic biology and also i am learning molecular biology techniques, actually i am happy to able to help the environment with our project.',
      phrase: '',
      opinion: 'I would improve in mexico the level economic in the science because many scientifics do not have the material necessary to work.'
    },
    {
      personId: 6,
      fullname: 'Gema Cortés',
      picture: '../../../assets/images/team/collaborators/s500_gemaCo.png',
      career: 'Arts & Humanities',
      coriousFact: "If it's not spicy, I'm not eating",
      igem: 'Because my carreer goal is bringing science to life, using scientific animation & illustration as a tool.',
      phrase: '',
      opinion: 'Make science more open and accessible to the public, not exclusive to scientists.'
    },
    {
      personId: 7,
      fullname: 'Jessica Ojeda',
      picture: '../../../assets/images/team/collaborators/s500_JessicaOj.png',
      career: 'Biology',
      coriousFact: 'I don’t know how to ride a bike although I just to have one... my parents didn’t let me use it because I use to get hurt really easy. I’m bit good at catching anything because I tend to close my eyes when they throw something at me.... that also explains why I’m bad at sports',
      igem: 'the development of a project starting from an idea with an interdisciplinary team is a unique experience. I’m learning a lot from their study areas and having a lot of fun at the same time.',
      phrase: '',
      opinion: 'I would develop more the scientific divulgation. I believe the lack of interest in science comes from the use of complicated technical words in the information they publish. I would also promote the collaboration of work groups because most of the times the information that is generated in a work group is not approachable to others and it restricts the growth'
    },
    {
      personId: 8,
      fullname: 'Damian Zamora',
      picture: '../../../assets/images/team/collaborators/photo-profile.jpg',
      career: 'Computer System Engineer',
      coriousFact: "I'm passionate about minimalist design in things",
      igem: 'We are competent students in our areas, in my case in web development which I will use to make the wiki that shows our information.',
      phrase: 'If you dream it, it will be possible',
      opinion: ''
    },
    {
      personId: 9,
      fullname: 'Julio Peréz',
      picture: '../../../assets/images/team/collaborators/photo-profile-julio.jpg',
      career: 'Computer System Engineer',
      coriousFact: "I'm very distracted but if something attracts my attention I don't let go until something more interesting appears.",
      igem: 'I think I’m in iGem ‘cause I had the opportunity and the decision of help to my teammates that makes a difference with their ideas and actions from my work area.',
      phrase: 'After all this time? Always…?',
      opinion: ''
    }
  ]

  externalCollaborators: Person[] = [
    {
      personId: 1,
      fullname: 'Cynthia Avendaño',
      picture: '../../../assets/images/team/collaborators/cynthia-small.jpg',
      career: 'Medical Biotechnology',
      coriousFact: 'I have an obsession with bags',
      igem:"I was invited by the student's leader, mostly for my experience in the laboratory",
      phrase: '',
      opinion: 'I would give to the Mexican scientific society the importance that actually have. I think that a lot of problems with the science in Mexico comes mostly because people have no idea of what a real scientist do'
    },
    {
      personId: 2,
      fullname: 'Victor A. Diaz',
      picture: '../../../assets/images/team/collaborators/victor-small.jpg',
      career: 'Medical Biotechnology',
      coriousFact: "I'm afraid of spiders",
      igem:"Because I'm really interested in synthetic biology. I like to be a mycoplasma pneumonie because it's capable of mimic host cell surface composition and therefore its diagnosis make complicated. So I will stay in my host for a long time.",
      phrase: '',
      opinion: 'What I would change about science in my country would be the investment that the government makes to support projects. I think that if the gross domestic product destined to science were greater, we could generate more and better human resources capable of producing quality science.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
