import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  last_wallpapers = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadHome();
  }

  loadHome():void{
    this.homeService.getHome().subscribe((data) => {
      this.last_wallpapers = data['last'];
    });
  }

  addFavourite(wallpaper_id: number):void{
    console.log(wallpaper_id);
  }

}
