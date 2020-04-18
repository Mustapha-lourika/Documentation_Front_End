import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CodeImpsService {







  constructor( private http:HttpClient) { }
  getCode():Observable<any>{
 return this.http.get("http://localhost:8080/getWidgete");
  }

  getCodeWidget(id):Observable<any>{
    return this.http.get("http://localhost:8080/getWidgetCode/"+id);


  }
  getMessage():Observable<any>{
    return this.http.get("http://localhost:8080/getMessage");


  }
  SaveCOdeChange(id,code){
    return this.http.put("http://localhost:8080/updateWidgetCode/"+id,code);

  }
  SaveImageChange(id,image64){
    return this.http.put("http://localhost:8080/updateWidgetImage/"+id,image64);

  }


}
