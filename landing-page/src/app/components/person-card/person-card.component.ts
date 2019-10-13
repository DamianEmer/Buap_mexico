import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BiographyModalComponent } from '../biography-modal/biography-modal.component';
import { Person } from 'src/app/pages/team/team.component';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() person: Person;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openBiographyModal(): void{
    const dialogRef = this.dialog.open(BiographyModalComponent, {
      width: '850px',
      height: '380px',
      data: this.person
    })
    dialogRef.afterClosed().subscribe(res => {
      console.log("Cerrado")
    })
  }
  

}
