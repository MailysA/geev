import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Annonces } from '../model/Annonces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class AnnoncesService {

     env = "http://localhost:9001";

    constructor(protected http: HttpClient) {
    }

    getAnnonces(pageNumber: string, limit: string): Observable<Annonces[]>{
        let params = new HttpParams();
        params.set('pageNumber', pageNumber);
        params.set('limit', limit);
        return this.http.get<Annonces[]>(`${this.env}/annonces`, { params })
              .pipe(map( (annonces: Object[]) => 
                annonces.map(jsonItem => 
                  new Annonces(jsonItem)
                )
              ))
    }
}