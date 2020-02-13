import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ArticleService{
    private BASE_URL='http://localhost:8080/api/articles';

    constructor(private http: HttpClient){

    }

    getAllByfacture(id:number): Observable<any>{
        return this.http.get(`${this.BASE_URL}/${id}`);
    }

    add(id: number, article:any): Observable<any> {
        return this.http.post(`${this.BASE_URL}/${id}`,article);
    }

    addItem(id: number): Observable<any> {
        return this.http.get(`${this.BASE_URL}/add/${id}`);
    }

    removeItem(id: number): Observable<any> {
        return this.http.get(`${this.BASE_URL}/remove/${id}`)
    }

}