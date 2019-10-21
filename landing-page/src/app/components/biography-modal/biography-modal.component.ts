import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/pages/team/team.component';

@Component({
  selector: 'app-biography-modal',
  templateUrl: './biography-modal.component.html',
  styleUrls: ['./biography-modal.component.scss']
})
export class BiographyModalComponent implements OnInit {

  person: Person;

  constructor(public dialogRef: MatDialogRef<BiographyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person) {
      this.person = data;
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
