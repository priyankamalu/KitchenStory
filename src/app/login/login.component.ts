import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { rece } from '../models/rece.model';
import { RsService } from '../services/rs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  @Input() recepy:rece[];

constructor(private rsService:RsService,private router:Router){

}
  
  onClick(){
    //this.rsService.recepyEvent.emit(this.recepy);
    this.router.navigateByUrl('display');
  }
  

}
