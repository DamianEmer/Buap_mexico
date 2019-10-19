import { NgModule } from '@angular/core';
import { ModelComponent } from './model.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ModelComponent }
]

@NgModule({
    declarations: [
        ModelComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        ModelComponent
    ]
})

export class ModelModule {
    
}