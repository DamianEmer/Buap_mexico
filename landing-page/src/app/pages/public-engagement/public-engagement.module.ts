import { NgModule } from '@angular/core';
import { PublicEngagementComponent } from './public-engagement.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {   path: '', component: PublicEngagementComponent  }
]

@NgModule({
    declarations: [
        PublicEngagementComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PublicEngagementComponent
    ]
})

export class PublicEngagementModule {

}