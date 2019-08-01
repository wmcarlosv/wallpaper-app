import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories():void{
    this.apiService.getCategories().subscribe( (data:any) => {
      this.categories = data['categories'];
    });
  }

  wallpapersByCategory(category_id: number):void{
    this.router.navigate(['/menu/wallpapers-by-category'],{ 
      queryParams:{
        id:category_id 
      }
    });
  }

  
}