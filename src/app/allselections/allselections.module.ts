import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { IonicModule } from '@ionic/angular';

import { AllselectionsPage } from './allselections.page';

const routes: Routes = [
  {
    path: '',
    component: AllselectionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllselectionsPage]
})
export class AllselectionsPageModule {}
