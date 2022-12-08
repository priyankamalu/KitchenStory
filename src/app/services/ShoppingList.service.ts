import {  Injectable, OnInit } from "@angular/core";
import { Recepy } from "../models/Recepy.model";
import { RecepyService } from "./recepy.service";

@Injectable({
    providedIn:'root'
})
export class ShoppingListService implements OnInit{
    recepys:Recepy[]=[];
    constructor(private recepyService:RecepyService){
    
    }
    ngOnInit(): void {
        this.recepyService.recepyShoppingListSubject.subscribe((recepy:Recepy)=>{
            this.recepys.push(recepy);
           });
    }
    getRecepys():Recepy[]{
      return this.recepys;
    }
}