import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class FactureBoissonService {
    private BASE_URL='http://localhost:8080/api/bars';

    constructor(private http: HttpClient) { }

    getAllBarFactures(): Observable<any> {
        return this.http.get(this.BASE_URL);
    }

    save(facture: any): Observable<any>{
        return this.http.post(this.BASE_URL, facture);
    }

    getOne(id:number): Observable<any> {
        return this.http.get(`${this.BASE_URL}/${id}`);
    }

    delete(id:number): Observable<any>{
        return this.http.delete(`${this.BASE_URL}/${id}`);
    }

    getAmount(id:number,amount:number): Observable<any>{
        return this.http.get(`${this.BASE_URL}/${id}/${amount}`);
    }

  }