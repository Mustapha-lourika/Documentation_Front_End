import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CodeVue } from './codeVueInterface';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor( private http:HttpClient) { }


  getCodeWidget():Observable<CodeVue>{
return this.http.get<CodeVue> ("http://localhost:8787/quercus/rea.php",{
  headers:new HttpHeaders({
    'Content-Type':  'application/json',
  })
})
  }
}
