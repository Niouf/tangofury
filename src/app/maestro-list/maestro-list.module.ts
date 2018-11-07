import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaestroListPage } from './maestro-list.page';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';
const routes: Routes = [
  {
    path: '',
    component: MaestroListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MaestroListPage]
})
export class MaestroListPageModule {}
