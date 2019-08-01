import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WallpaperDetailsPage } from './wallpaper-details.page';

const routes: Routes = [
  {
    path: '',
    component: WallpaperDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WallpaperDetailsPage]
})
export class WallpaperDetailsPageModule {}
