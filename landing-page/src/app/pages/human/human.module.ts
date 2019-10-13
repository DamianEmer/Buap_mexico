import { NgModule } from '@angular/core';
import { HumanComponent } from './human.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: "",
    component: HumanComponent
}
]

@NgModule({
    declarations: [HumanComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [HumanComponent]
})

export class HumanModule { }