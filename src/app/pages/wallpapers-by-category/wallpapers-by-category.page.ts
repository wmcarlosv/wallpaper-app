import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-wallpapers-by-category',
  templateUrl: './wallpapers-by-category.page.html',
  styleUrls: ['./wallpapers-by-category.page.scss'],
})
export class WallpapersByCategoryPage implements OnInit {

  category_id: number;
  wallpapers = [];
  category = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.queryParams.subscribe(params => {
      this.category_id = params.id;
    });
  }

  ngOnInit() {
    this.loadWallpapersByCategory();
  }

  loadWallpapersByCategory():void{
    this.apiService.getWallpapersByCategory(this.category_id).subscribe( (data:any) => {
      this.wallpapers = data['wallpapers'];
      this.category = data['category'];
    });
  }

}
