import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-wallpaper-details',
  templateUrl: './wallpaper-details.page.html',
  styleUrls: ['./wallpaper-details.page.scss'],
})
export class WallpaperDetailsPage implements OnInit {

  wallpaper_id: number;
  wallpaper = [];
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.queryParams.subscribe( params => {
      this.wallpaper_id = params.id;
    });
  }

  ngOnInit() {
    this.getWallpaperDetail();
  }

  getWallpaperDetail():void{
    this.apiService.getWallpaperById(this.wallpaper_id).subscribe( (data: any) =>{
      this.wallpaper = data['wallpaper'];
    });
  }

}
