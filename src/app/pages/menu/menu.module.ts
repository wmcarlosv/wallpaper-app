import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { 
        path: 'home', 
        loadChildren: '../home/home.module#HomePageModule' 
      },
      { 
        path: 'wallpapers', 
        loadChildren: '../wallpapers/wallpapers.module#WallpapersPageModule' 
      },
      { 
        path: 'categories', 
        loadChildren: '../categories/categories.module#CategoriesPageModule' 
      },
      { 
        path: 'favourites', 
        loadChildren: '../favourites/favourites.module#FavouritesPageModule' 
      },
      { 
        path: 'about', 
        loadChildren: '../about/about.module#AboutPageModule' 
      },
      { 
        path: 'privacy', 
        loadChildren: '../privacy/privacy.module#PrivacyPageModule' 
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
