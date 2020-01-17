import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'newslist', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'newslist', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'editpage', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'newslist/:id', loadChildren: () => import('./article-page/article-page.module').then(m => m.ArticlePageModule) },
            { path: 'about', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
