import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recepy } from 'src/app/models/Recepy.model';
import {RecepyService} from 'src/app/services/recepy.service';

@Component({
  selector: 'app-recepy-detail',
  templateUrl: './recepy-detail.component.html',
  styleUrls: ['./recepy-detail.component.css']
})
export class RecepyDetailComponent implements OnInit{
  recepy:Recepy
constructor(private recepyService:RecepyService,private router:Router){

}
ngOnInit():void{
  this.recepyService.recepyEvent.subscribe(recepy=>{
   this.recepy=recepy;
  });
}
onSend()
{
  this.recepyService.recepyShoppingListSubject.next(this.recepy);
  this.router.navigateByUrl('order-list');
}

}
