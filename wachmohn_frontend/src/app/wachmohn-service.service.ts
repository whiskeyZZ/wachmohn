import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from './blog/blogentry';

@Injectable({
  providedIn: 'root'
})
export class WachmohnService {

  private url = 'http://localhost:8080/wachmohn/'

  constructor(private http: HttpClient) { }

  public getBlogEntries(): Observable<Entry[]>{
    return this.http.get<Entry[]>(this.url + 'entry');
  }
}
