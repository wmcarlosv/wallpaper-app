import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  last_wallpapers = [];
  popular_wallpapers = [];
  rates_wallpapers = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadHome();
  }

  loadHome():void{
    this.apiService.getHome().subscribe((data:any) => {
      this.last_wallpapers = data['last'];
      this.popular_wallpapers = data['popular'];
      this.rates_wallpapers = data['rates'];
    });
  }

}
