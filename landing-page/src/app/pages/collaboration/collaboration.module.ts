import { NgModule } from '@angular/core';
import { CollaborationComponent } from './collaboration.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {   path: '', component: CollaborationComponent}
]

@NgModule({
    declarations: [
        CollaborationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        CollaborationComponent
    ]
})

export class CollaborationModule {
    
}