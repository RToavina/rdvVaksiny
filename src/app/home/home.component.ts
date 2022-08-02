import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Region } from '../shared/model/region';
import { RegionService } from '../shared/services/region.service';
import {VaccinService} from '../shared/services/vaccin.service';
import {Vaccin} from '../shared/model/vaccin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  vaccins: Vaccin[] = [];

  constructor(private vaccinService: VaccinService) { }

  ngOnInit() {
    this.vaccinService.getAll().subscribe((res)=> {
      this.vaccins = res.docs;
      console.log(this.vaccins);
    });
  }

  ngOnDestroy(): void {
  }

}
