import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginatedRegion, Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  url = environment.apiMongo;
  constructor(private http: HttpClient) { }

  getRegions() {
      return this.http.get<PaginatedRegion>(this.url+'/regions');
  }
}
