import  { NgModule } from '@angular/core';
import { AttributionComponent } from './attribution.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {   path: '', component: AttributionComponent}
]

@NgModule({
    declarations: [
        AttributionComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        AttributionComponent
    ]
})

export class AttributionModule {

}