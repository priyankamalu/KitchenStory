import { Recepy } from 'src/app/models/Recepy.model';
import {EventEmitter} from "@angular/core";
import{Subject} from 'rxjs';


export class RecepyService{
    recepys:Recepy[]=
[
new Recepy(1,"Biryani","https://media.istockphoto.com/id/1355635210/photo/pilau-or-vegetable-biryani.jpg?b=1&s=170667a&w=0&k=20&c=nwhUNrGCch19aqzISaZUbGHORtcBVsZWmfk-RLeWuCE=","testy"),
new Recepy(2,"panner","https://media.istockphoto.com/id/1318013821/photo/pan-fried-paneer.jpg?b=1&s=170667a&w=0&k=20&c=ZvYhLxU708WWFcrtfzzVdmsp9xIukjYIwzVypx00I5s=","yummy")
];
recepyEvent=new EventEmitter<Recepy>(); 
  recepyShoppingListSubject = new Subject<Recepy>();
    public getRecepys():Recepy[]
    {
        return this.recepys;
    }
}