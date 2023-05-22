import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './components/by-capital/by-capital.component';
import { ByNameComponent } from './components/by-name/by-name.component';
import { ByRegionComponent } from './components/by-region/by-region.component';
import { ShowCountryComponent } from './components/show-country/show-country.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';
import { RestCountriesService } from './services/RestCountries.service';
import { Table2Component } from './components/table2/table2.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    ShowCountryComponent,
    TableComponent,
    Table2Component
  ],
  exports:[
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    RestCountriesService
  ]
})
export class CountryModule { }
