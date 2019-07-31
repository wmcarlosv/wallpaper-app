import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories():any{
    this.apiService.getCategories().subscribe( (data:any) => {
      this.categories = data['categories'];
    });
  }
}