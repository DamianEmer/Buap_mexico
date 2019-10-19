import { NgModule } from '@angular/core';
import { PartsComponent } from './parts.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {   path: '', component: PartsComponent}
]

@NgModule({
    declarations: [
        PartsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PartsComponent
    ]
})

export class PartsModule {
    
}