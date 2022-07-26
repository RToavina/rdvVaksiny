import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Region } from '../shared/model/region';
import { RegionService } from '../shared/services/region.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  
  regions: Region[] = [];

  constructor(private regionService: RegionService) { }
 
  ngOnInit() { 
      this.regionService.getRegions().subscribe(res =>{
        this.regions = res.docs;
      });
  }

  ngOnDestroy(): void {
  }

}
