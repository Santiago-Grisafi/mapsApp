import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RestCountriesService } from '../../services/RestCountries.service';
import { Country } from '../../interface/Country.interface';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit{

  countries: Country[] = [];
  error: boolean = false;
  term: string = "";

  debouncer: Subject<string> = new Subject();

  constructor(private restCountriesService: RestCountriesService){}

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe((value: string) => this.keyPress.emit(value));
  }

  @ViewChild('textSearch') textSearch!: any;
  @Output() keyPress: EventEmitter<String>= new EventEmitter();

  searchTerm = () =>{
    if(this.textSearch.nativeElement.value.trim().length>=20){
      this.textSearch.nativeElement.value = "";
    }
    this.term = this.textSearch.nativeElement.value;
    if(this.term.trim().length>=3){
      this.getCountries(this.textSearch.nativeElement.value);
    }
  }

  getCountries = (capital: string) =>{
    this.error = false;
    return this.restCountriesService.getCountryByCapital(capital)
    .subscribe((resp: Country[]) => {return this.countries = resp},
    (err)=>{this.error = true});
  }

  keyPressed = (event: any)=>{
    this.error = false;
    this.debouncer.next(event.target.value);
  }
}
