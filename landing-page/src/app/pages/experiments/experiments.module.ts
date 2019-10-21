import { NgModule } from '@angular/core';
import { ExperimentsComponent } from './experiments.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
    { path: '', component: ExperimentsComponent }
]

@NgModule({
    declarations: [
        ExperimentsComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        ExperimentsComponent
    ]
})

export class ExperimentsModule {

}