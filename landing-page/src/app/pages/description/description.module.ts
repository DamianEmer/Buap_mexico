import { NgModule } from '@angular/core';
import { DescriptionComponent } from './description.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

const routes: Routes = [ {path: '', component: DescriptionComponent} ]

@NgModule({
    declarations: [DescriptionComponent],
    imports: [
        CommonModule,
        ParallaxModule,
        RouterModule.forChild(routes)
    ],
    exports: [DescriptionComponent]
})

export class DescriptionModule {

}