import { NgModule } from '@angular/core';
import { HumanComponent } from './human.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { SliderCarouselModule } from 'slider-carousel';
import { FlexLayoutModule } from '@angular/flex-layout'

const routes: Routes = [
    {   path: "", component: HumanComponent }
]

@NgModule({
    declarations: [HumanComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule.forChild(routes),
        NgxPageScrollCoreModule,
        NgxPageScrollModule,
        SliderCarouselModule
    ],
    exports: [HumanComponent]
})

export class HumanModule { }