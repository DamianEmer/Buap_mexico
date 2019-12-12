import { Component, OnInit, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

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

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT)private document:any)  { }

  ngOnInit() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd'
    })
  }

}
