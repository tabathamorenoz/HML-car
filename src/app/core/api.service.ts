import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    let obj;
    this.getJSON().subscribe(data => obj = data, error => console.log(error));
  }

  public getJSON(): Observable<any> {
    return this.http.get(environment.api);
  }

  getDetails(): Observable<any> {
    return this.getJSON()
      .map((res) => {
        const r = [];
        for (const item of res) {
          r.push(item);
        }
        return r;
      });
  }

  getDetailsFor(location): Observable<any> {
    return this.getJSON()
      .map((res) => {
        const r = [];
        for (const item of res) {
          if (item['location'] === location) {
            r.push(item);
          }
        }
        return r;
      });
  }

  getLocations(): Observable<any> {
    return this.getJSON()
      .map((res) => {
        const r = [];
        for (const item of res) {
          r.push(item['location']);
        }
        return new Set(r);
      });
  }

}
