import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi ='https://gsi.fly.dev/characters/?page=1';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
