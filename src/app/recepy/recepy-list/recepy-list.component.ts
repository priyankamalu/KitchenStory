import { Component,OnInit } from '@angular/core';
import { Recepy } from 'src/app/models/Recepy.model';
import {RecepyService} from 'src/app/services/recepy.service';


@Component({
  selector: 'app-recepy-list',
  templateUrl: './recepy-list.component.html',
  styleUrls: ['./recepy-list.component.css']
})
export class RecepyListComponent implements OnInit
{
  recepys:Recepy[];
  constructor(private recepyService:RecepyService){

  }
  ngOnInit():void{
    this.recepys=this.recepyService.getRecepys();
  }
}
