import { Component, OnInit } from '@angular/core';
import { RestCountriesService } from '../../services/RestCountries.service';
import { Country } from '../../interface/Country.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit{

  country!: any;

  constructor(private restCountriesService: RestCountriesService, private activatedRouter: ActivatedRoute){}
  
  
  ngOnInit(): void {
    this.activatedRouter.params.pipe(
      switchMap(({codeCountry})=> this.restCountriesService.getCountryByCode(codeCountry)))
      .subscribe((resp: Country) => this.country = resp);
  }
}


