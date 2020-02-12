import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoissonService {

  private BASE_URL='http://localhost:8080/api/boissons';

  constructor(private http: HttpClient) { }

  getBoisson(id:number): Observable<any> {

    return this.http.get(`${this.BASE_URL}/${id}`);
  }

  createBoisson(boisson: any): Observable<any> {
    return this.http.post(this.BASE_URL, boisson);
  }

  updateBoisson(id: number, value: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/${id}`, value);
  }
  deleteBoisson(id:number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }

  getBoissonList(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  getBoissonsByType(type: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/type/${type}`);
  }

  getBoissonsByPrice(price: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/price/${price}`);
  }
}
