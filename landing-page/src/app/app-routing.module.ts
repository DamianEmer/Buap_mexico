import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'human',
        loadChildren: () => import('./pages/human/human.module').then(m => m.HumanModule)
    },
    {
        path: 'description',
        loadChildren: () => import('./pages/description/description.module').then(m => m.DescriptionModule)
    },
    {
        path: 'team',
        loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule)
    },
    {
        path: 'design',
        loadChildren: () => import('./pages/design/design.module').then(m => m.DesignModule)
    },
    {
        path: 'model',
        loadChildren: () => import('./pages/model/model.module').then(m => m.ModelModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }