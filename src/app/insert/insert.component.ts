import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RsService } from '../services/rs.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit{
  constructor(private rsservice:RsService,private router:Router){

  }
  ngOnInit(): void {
    
  }
  onSubmit(f:NgForm){
    this.rsservice.insertRecepy(f.value).subscribe(()=>
    { 
      //console.log(res);
    });
    this.router.navigateByUrl('display');
  }

}
