import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../interfaces/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private url ='http://localhost:3000/quotes'
  constructor(private http: HttpClient) { }

  getallquotes(): Observable<Data[]>{
    return this.http.get<Data[]>(this.url)
  }
}
