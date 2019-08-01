import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wallpapers-by-category',
  templateUrl: './wallpapers-by-category.page.html',
  styleUrls: ['./wallpapers-by-category.page.scss'],
})
export class WallpapersByCategoryPage implements OnInit {

  category_id: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.category_id = params.id;
    });
  }

  ngOnInit() {
    
  }

}
