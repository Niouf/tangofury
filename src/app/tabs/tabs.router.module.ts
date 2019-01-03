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
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      }
      ,
      {
        path: 'tango-maestros',
        children: [
          {
            path: '',
            loadChildren: '../maestro-list/maestro-list.module#MaestroListPageModule'
          }
        ]
      },
      {
        path: 'tango-maestros/:slug',
        children: [
          {
            path: '',
            loadChildren: '../maestro/maestro.module#MaestroPageModule'
          }
        ]
      },
      {
        path: 'latest',
        children: [
          {
            path: '',
            loadChildren: '../lastvideos/lastvideos.module#LastvideosPageModule'
          }
        ]
      },
      {
        path: 'playlists',
        children: [
          {
            path: '',
            loadChildren: '../playlist-list/playlist-list.module#PlaylistListPageModule'
          }
        ]
      },
      {
        path: 'playlist-user/:userkey/:key',
        children: [
          {
            path: '',
            loadChildren: '../playlist/playlist.module#PlaylistPageModule'
          }
        ]
      }
      ,
      {
        path: 'selection/:userkey/:key',
        children: [
          {
            path: '',
            loadChildren: '../playlist/playlist.module#PlaylistPageModule'
          }
        ]
      } 
      ,
      {
        path: 'tango-selections-all',
        children: [
          {
            path: '',
            loadChildren: '../allselections/allselections.module#AllselectionsPageModule'
          }
        ]
      } 
    ]
  }
  ,
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

/*
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
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
*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
