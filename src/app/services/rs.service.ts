
import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { rece } from "../models/rece.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class RsService
{

    //=new EventEmitter<rece[]>();
    private url:string="http://localhost:8080/rec";
constructor(private httpClient:HttpClient){

}
getRecepys():Observable<rece[]>{
  return this.httpClient.get<rece[]>(this.url);
}
deleteRecepy(id:number):Observable<string>{
    return this.httpClient.delete<string>(this.url+`/${id}`);
}
insertRecepy(rec:rece):Observable<string>{
   return this.httpClient.post<string>(this.url,rec);
}
}