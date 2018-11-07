import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaylistListPage } from './playlist-list.page';
import { ItemVideoModule } from '../item-video/item-video.module';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';

const routes: Routes = [
  {
    path: '',
    component: PlaylistListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ItemVideoModule,
    MenuModule,
    ReactiveFormsModule,
    FooterModule 
  ],
  declarations: [PlaylistListPage],
  exports:[]
})
export class PlaylistListPageModule {}
