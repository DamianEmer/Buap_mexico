import { NgModule } from '@angular/core';
import { BiographyModalComponent } from './biography-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ BiographyModalComponent ],
    entryComponents: [ BiographyModalComponent ],
    imports: [ CommonModule ],
    exports: [ BiographyModalComponent ]
})

export class BiographyModalModule { }