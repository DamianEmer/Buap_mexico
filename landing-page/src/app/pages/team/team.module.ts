import { NgModule } from '@angular/core';
import { TeamComponent } from './team.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonCardModule } from 'src/app/components/person-card/person-card.module';

const routes: Routes = [
    { path: '', component: TeamComponent }
]

@NgModule({
    declarations: [
        TeamComponent
    ],
    imports: [
        CommonModule,
        PersonCardModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        TeamComponent
    ]
})

export class TeamModule {

}