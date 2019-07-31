import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-wallpapers',
  templateUrl: './wallpapers.page.html',
  styleUrls: ['./wallpapers.page.scss'],
})
export class WallpapersPage implements OnInit {

  wallpapers = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadWallpapers();
  }

  loadWallpapers():void{
    this.apiService.getWallpapers().subscribe( (data:any) => {
      this.wallpapers = data['wallpapers'];
    });
  }

}
