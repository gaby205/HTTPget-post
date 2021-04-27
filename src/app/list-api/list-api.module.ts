import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAPIPageRoutingModule } from './list-api-routing.module';

import { ListAPIPage } from './list-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAPIPageRoutingModule
  ],
  declarations: [ListAPIPage]
})
export class ListAPIPageModule {}
