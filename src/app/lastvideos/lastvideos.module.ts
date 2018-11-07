import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ItemVideoModule } from '../item-video/item-video.module';
import { LastvideosPage } from './lastvideos.page';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';

const routes: Routes = [
  {
    path: '',
    component: LastvideosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemVideoModule,
    MenuModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LastvideosPage,
  ]
})
export class LastvideosPageModule {}
