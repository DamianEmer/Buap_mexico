import { NgModule } from '@angular/core';
import { PersonCardComponent } from './person-card.component';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { BiographyModalModule } from '../biography-modal/biography-modal.module';

@NgModule({
    declarations: [
        PersonCardComponent
    ],
    imports: [
        CommonModule,
        BiographyModalModule,
        MatDialogModule
    ],
    exports: [
        PersonCardComponent
    ]
})

export class PersonCardModule {
    
}