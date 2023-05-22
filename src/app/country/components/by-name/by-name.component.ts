import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Country } from '../../interface/Country.interface';
import { RestCountriesService } from '../../services/RestCountries.service';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css']
})
export class ByNameComponent implements OnInit{

  countries: Country[] = [];
  error: boolean = false;
  term: string = "";

  debounce: Subject<string> = new Subject();

  constructor(private restCountriesService: RestCountriesService){}
  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(value => this.searchEvent.emit(value));
  }

  @ViewChild('textSearch') searchText!: any;
  @Output() searchEvent: EventEmitter<string>= new EventEmitter();

  searchTerm = () =>{
    this.error = false;
    if(this.searchText.nativeElement.value.trim().length>=20){
      this.searchText.nativeElement.value = "";
    }
    this.term = this.searchText.nativeElement.value;
    this.getCountries(this.searchText.nativeElement.value);
  }

  getCountries = (country: string) =>{
    this.error = false;
    return this.restCountriesService.getCountryByName(country)
    .subscribe((resp: Country[]) => {return this.countries = resp}
    ,(err)=> {this.error = true;})
  }

  keyPress = (event: any) =>{
    this.error = false;
    this.searchEvent.emit(event.target.value);
  }
}
