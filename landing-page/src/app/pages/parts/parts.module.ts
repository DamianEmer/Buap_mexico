import { NgModule } from '@angular/core';
import { PartsComponent } from './parts.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';


const routes: Routes = [
    { path: '', component: PartsComponent }
]

@NgModule({
    declarations: [
        PartsComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PartsComponent
    ]
})

export class PartsModule {

}