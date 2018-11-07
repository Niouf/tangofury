import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { MaestroListPageModule } from '../maestro-list/maestro-list.module';
import { MaestroPageModule } from '../maestro/maestro.module';
import { LastvideosPageModule } from '../lastvideos/lastvideos.module';
import { HomePageModule } from '../home/home.module';
import { PlaylistListPageModule } from '../playlist-list/playlist-list.module';
import { PlaylistPageModule } from '../playlist/playlist.module';
import { AllselectionsPageModule } from '../allselections/allselections.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    MaestroListPageModule,
    LastvideosPageModule,
    PlaylistListPageModule,
    MaestroPageModule,
    PlaylistPageModule,
    AllselectionsPageModule
  ],
  declarations: [TabsPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
})
export class TabsPageModule {}
