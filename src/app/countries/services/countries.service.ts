import { Country } from './../interfaces/country';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "https://restcountries.com/v3.1";

@Injectable({providedIn: 'root'})
export class CountriesService {

  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${API_URL}/capital/${term}`;
    console.log({url});
    return this.http.get<Country[]>(url);
  }
}
