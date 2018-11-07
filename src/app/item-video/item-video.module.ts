import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemVideoComponent } from './item-video.component';


@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    IonicModule,
    //ModalPlaylistModule
  ],
  declarations: [
      ItemVideoComponent,
  ],
  exports:[ItemVideoComponent]
})
export class ItemVideoModule {}