import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: ()=> import('../tab-pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'explore',
        loadChildren: ()=> import('../tab-pages/explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: 'search',
        loadChildren: ()=> import('../tab-pages/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'account',
        loadChildren: ()=> import('../tab-pages/account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
