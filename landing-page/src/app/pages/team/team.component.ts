import { Component, OnInit } from '@angular/core';

export interface Person {
  personId: number;
  fullname: string;
  picture: string;
  career: string;
  coriousFact: string;
  igem: string;
  phrase: string;
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
      career: '',
      coriousFact: '',
      igem: '',
      phrase: ''
    },
    {
      personId: 2,
      fullname: 'Angel Plascencia',
      picture: '../../../assets/images/team/collaborators/s500_AngelPl.png',
      career: '',
      coriousFact: '',
      igem: '',
      phrase: ''
    },
    {
      personId: 3,
      fullname: 'Araxie Molina',
      picture: '../../../assets/images/team/collaborators/s500_AraxieMo.png',
      career: '',
      coriousFact: '',
      igem: '',
      phrase: ''
    },
    {
      personId: 4,
      fullname: 'Cristobal Baez',
      picture: '../../../assets/images/team/collaborators/s500_CristobalBa.png',
      career: '',
      coriousFact: '',
      igem: '',
      phrase: ''
    },
    {
      personId: 5,
      fullname: 'Emilio Tlaxcalteca',
      picture: '../../../assets/images/team/collaborators/s500_EmilioTl.png',
      career: '',
      coriousFact: '',
      igem: '',
      phrase: ''
    },
    {
      personId: 6,
      fullname: 'Gema Cortés',
      picture: '../../../assets/images/team/collaborators/s500_gemaCo.png',
      career: '',
      coriousFact: '',
      igem: '',
      phrase: ''
    },
    {
      personId: 7,
      fullname: 'Jessica Ojeda',
      picture: '../../../assets/images/team/collaborators/s500_JessicaOj.png',
      career: '',
      coriousFact: '',
      igem: '',
      phrase: ''
    },
    {
      personId: 8,
      fullname: 'Damian Zamora',
      picture: '../../../assets/images/team/collaborators/photo-profile.jpg',
      career: 'Computer System Engineer',
      coriousFact: "I'm passionate about minimalist design in things",
      igem: 'We are competent students in our areas, in my case in web development which I will use to make the wiki that shows our information.',
      phrase: 'If you dream it, it will be possible'
    },
    {
      personId: 9,
      fullname: 'Julio Peréz',
      picture: '../../../assets/images/team/collaborators/photo-profile-julio.jpg',
      career: 'Computer System Engineer',
      coriousFact: "I'm very distracted but if something attracts my attention I don't let go until something more interesting appears.",
      igem: 'I think I’m in iGem ‘cause I had the opportunity and the decision of help to my teammates that makes a difference with their ideas and actions from my work area.',
      phrase: 'After all this time? Always…?'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
