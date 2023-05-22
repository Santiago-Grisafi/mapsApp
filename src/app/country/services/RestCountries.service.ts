
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";
import { Country } from "../interface/Country.interface";
import { Injectable } from "@angular/core";

let params = {
    url: "https://restcountries.com/v3.1",
}


@Injectable()
export class RestCountriesService{


    countries: Country [] = [];
    country: any = {};
    
    constructor(private http: HttpClient){}

    get Countries(){
        return [...this.countries];
    }

    get Country(){
        return this.country;
    }

    getCountries = (): Observable<Country[]> =>{
        return this.http.get<Country[]>(`${params.url}/all`)
        .pipe(map((resp:Country[]) => this.countries = resp))
    }

    getCountryByName = (name: string = ""): Observable<Country[]>=>{
        return this.http.get<Country[]>(`${params.url}/name/${name}`)
        .pipe(map((resp:Country[]) => this.country = resp));
    }

    getCountryByRegion = (region: string): Observable<Country[]>=>{
        return this.http.get<Country[]>(`${params.url}/region/${region}`)
        .pipe(map((resp:Country[]) => this.country = resp));
    }

    getCountryByCapital = (capital: string = ""): Observable<Country[]>=>{
        return this.http.get<Country[]>(`${params.url}/capital/${capital}`)
        .pipe(map((resp:Country[]) => this.country = resp));
    }

    getCountryByCode = (code: any): Observable<Country>=>{
        return this.http.get<Country>(`${params.url}/alpha/${code}`)
        .pipe(map((resp:any) => {
            return this.country = resp[0];
        }));
    }

}