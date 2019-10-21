import { NgModule } from '@angular/core';
import { SafetyComponent } from './safety.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {   path: '', component: SafetyComponent}
]

@NgModule({
    declarations:[
        SafetyComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        SafetyComponent
    ]
})

export class SafetyModule {
    
}