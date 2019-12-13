import { Component, OnInit, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.scss']
})
export class HumanComponent implements OnInit {

  images : string[] = [
    '../../../assets/images/description/description-1.jpg', 
    '../../../assets/images/description/description-2.jpg', 
    '../../../assets/images/description/description-3.jpg'
  ];

  sliderWIllustration: string[] = [
    '../../../assets/images/humanpractices/sliderWorkshopIllustration/inicioCarrusel.png', 
    '../../../assets/images/humanpractices/sliderWorkshopIllustration/Diapositiva1.PNG', 
    '../../../assets/images/humanpractices/sliderWorkshopIllustration/Diapositiva2.PNG', 
    '../../../assets/images/humanpractices/sliderWorkshopIllustration/Diapositiva3.PNG', 
    '../../../assets/images/humanpractices/sliderWorkshopIllustration/Diapositiva4.PNG', 
    '../../../assets/images/humanpractices/sliderWorkshopIllustration/Diapositiva5.PNG', 
    '../../../assets/images/humanpractices/sliderWorkshopIllustration/Diapositiva6.PNG', 
    '../../../assets/images/humanpractices/sliderWorkshopIllustration/Diapositiva7.PNG', 
    '../../../assets/images/humanpractices/sliderWorkshopIllustration/Diapositiva8.PNG', 
  ]

  sliderWWomanScience: string [] = [
    '../../../assets/images/humanpractices/sliderWomanScience/foto1.jpg',
    '../../../assets/images/humanpractices/sliderWomanScience/foto2.jpg',
    '../../../assets/images/humanpractices/sliderWomanScience/foto3.jpg',
    '../../../assets/images/humanpractices/sliderWomanScience/foto4.jpg',
    '../../../assets/images/humanpractices/sliderWomanScience/foto5.jpg',
    '../../../assets/images/humanpractices/sliderWomanScience/foto6.jpg',
    '../../../assets/images/humanpractices/sliderWomanScience/foto7.jpg'
  ]

  sliderWScience: string[] = [
    '../../../assets/images/humanpractices/sliderWorkshopScience/foto1.jpg',
    '../../../assets/images/humanpractices/sliderWorkshopScience/foto2.jpg',
    '../../../assets/images/humanpractices/sliderWorkshopScience/foto3.jpg',
    '../../../assets/images/humanpractices/sliderWorkshopScience/foto4.jpg',
  ]

  sliderColiVideogame: string[] = [
    '../../../assets/images/humanpractices/sliderVideogame/inicioCarrusel.png',
    '../../../assets/images/humanpractices/sliderVideogame/foto1.PNG',
    '../../../assets/images/humanpractices/sliderVideogame/foto2.PNG',
    '../../../assets/images/humanpractices/sliderVideogame/foto3.PNG',
    '../../../assets/images/humanpractices/sliderVideogame/foto4.PNG',
    '../../../assets/images/humanpractices/sliderVideogame/foto5.PNG',
  ]

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT)private document:any,
  private router: Router)  { }

  ngOnInit() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd'
    })
  }

  redirectToVideogame(){
    // this.router.navigateByUrl('https://akiru-aki.itch.io/coli-game');
    this.document.location.href='https://akiru-aki.itch.io/coli-game';
  }

}
