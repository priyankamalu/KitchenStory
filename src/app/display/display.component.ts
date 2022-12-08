import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rece } from '../models/rece.model';
import { RsService } from '../services/rs.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  recepy1:rece[];
  constructor(private rsservice:RsService,private router:Router)
  {

  }
ngOnInit(): void {

  this.rsservice.getRecepys().subscribe((recepy1:rece[])=>{
  this.recepy1=recepy1;
 });
  
}
onClick1(){
  this.router.navigateByUrl('insert');
}

}
