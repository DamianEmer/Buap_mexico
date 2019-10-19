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
    },
    {
        path: 'attributions',
        loadChildren: () => import('./pages/attribution/attribution.module').then(m => m.AttributionModule)
    },
    {
        path: 'collaborations',
        loadChildren: () => import('./pages/collaboration/collaboration.module').then(m => m.CollaborationModule)
    },
    {
        path: 'parts',
        loadChildren: () => import('./pages/parts/parts.module').then(m => m.PartsModule)
    },
    {
        path: 'public-engagement',
        loadChildren: () => import('./pages/public-engagement/public-engagement.module').then(m => m.PublicEngagementModule)
    },
    {
        path: 'safety',
        loadChildren: () => import('./pages/safety/safety.module').then(m => m.SafetyModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }