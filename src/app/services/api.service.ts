import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  home_end_point: string = environment.app_url+environment.api_key+"/home";
  wallpapers_end_point: string = environment.app_url+environment.api_key+"/wallpapers";
  categories_end_point: string = environment.app_url+environment.api_key+"/categories";

  constructor(private http: HttpClient) { }

  getHome():any{
    return this.http.get(this.home_end_point);
  }

  getWallpapers():any{
    return this.http.get(this.wallpapers_end_point);
  }

  getCategories():any{
    return this.http.get(this.categories_end_point);
  }

  getWallpapersByCategory(id:number):any{
    let wallbycat_end_point:string = environment.app_url+environment.api_key+"/categories/"+id;
    return this.http.get(wallbycat_end_point);
  }

  getWallpaperById(id:number):any{
    let wallbyid_end_point:string = environment.app_url+"wallpaper/"+id;
    return this.http.get(wallbyid_end_point);
  }
}
