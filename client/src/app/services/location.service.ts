import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../models/Location';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getLocatoins(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl+'locations');
  }

  addLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(this.apiUrl+'location', location, httpOptions);
  }

}
