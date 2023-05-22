import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestCountriesService } from '../../services/RestCountries.service';
import { Country } from '../../interface/Country.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent{

  countries: Country[] = [];

  constructor(private restCountriesService: RestCountriesService){}

  debouncer: Subject<string> = new Subject();

  regions: string[] = ["africa","americas","asia","europe"];
  activeRegion: string = "";

  error: boolean = false;

  activedRegion = (region: string) =>{
    if(this.activeRegion === region){return;}
    this.activeRegion = region; this.error=false;
    this.restCountriesService.getCountryByRegion(region)
    .subscribe((data: Country[])=> {return this.countries = data});
  }
}
