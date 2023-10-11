import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = 'https://pokeapi.co/api/v2'

  constructor(private http:HttpClient) { }

  getUsers():Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon`)
  }
}
