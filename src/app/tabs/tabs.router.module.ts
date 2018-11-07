import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { LastvideosPage } from '../lastvideos/lastvideos.page';
import { MaestroListPage } from '../maestro-list/maestro-list.page';
import { PlaylistListPage } from '../playlist-list/playlist-list.page';
import { PlaylistPage } from '../playlist/playlist.page';
import { MaestroPage } from '../maestro/maestro.page';
import { AllselectionsPage } from '../allselections/allselections.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'tango-maestros',
        outlet: 'tango-maestros',
        component: MaestroListPage
      },
      {
        path: 'maestro-details/:slug',
        outlet: 'tango-maestros',
        component: MaestroPage
      },
      {
        path: 'latest',
        outlet: 'latest',
        component: LastvideosPage
      },
      {
        path: 'playlist-list',
        outlet: 'playlist-list',
        component: PlaylistListPage
      },
      {
        path: 'tango-selections-all',
        outlet: 'home',
        component: AllselectionsPage
      },
      {
        path: 'selection/:userkey/:key',
        outlet: 'home',
        component: PlaylistPage
      },
      {
        path: 'playlist-user/:userkey/:key',
        outlet: 'playlist-list',
        component: PlaylistPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
