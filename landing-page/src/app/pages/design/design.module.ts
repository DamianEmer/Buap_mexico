import { NgModule } from '@angular/core';
import { DesignComponent } from './design.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParallaxModule } from 'ngx-parallax';

const routes: Routes = [
    {   path: '', component: DesignComponent    }
]

@NgModule({
    declarations: [
        DesignComponent
    ],
    imports: [
        CommonModule,
        ParallaxModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        DesignComponent
    ]
})

export class DesignModule {
    
}