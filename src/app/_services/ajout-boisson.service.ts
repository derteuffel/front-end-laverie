import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class AjoutBoissonService {
    private BASE_URL='http://localhost:8080/api/ajouts';


    constructor(private http: HttpClient){}

    getAllAdds(): Observable<any> {
        return this.http.get(this.BASE_URL);
    }

    getOne(id: number): Observable<any> {
        return this.http.get(`${this.BASE_URL}/${id}`);
    }

    createAdds(ajout: any, id: number): Observable<any> {
        return this.http.post(`${this.BASE_URL}/${id}`, ajout);
      }

      deleteAdds(id:number): Observable<any> {
        return this.http.delete(`${this.BASE_URL}/${id}`);
      }

      getAllAddsByBoisson(id: number): Observable<any> {
        return this.http.get(`${this.BASE_URL}/boisson/${id}`);
      }

      getAllAddsByName(name: string): Observable<any> {
        return this.http.get(`${this.BASE_URL}/name/${name}`);
      }

      updateBoisson(id: number, value: any): Observable<any> {
        return this.http.put(`${this.BASE_URL}/${id}`, value);
      }

  }