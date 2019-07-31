import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  home_end_point: string = environment.app_url+environment.api_key+"/home";

  constructor(private http: HttpClient) { }

  getHome(): any{
    return this.http.get(this.home_end_point);
  }
}
