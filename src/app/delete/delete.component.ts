import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RsService } from '../services/rs.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

  constructor(private rsservice:RsService,private router:Router,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    let id:number;
    this.activatedRoute.params.subscribe((param:Params)=>{
      id=+param['id'];
    });
    this.rsservice.deleteRecepy(id).subscribe((re:string)=>{
      console.log(re);
      
    });
    this.router.navigateByUrl('display');
  }

}
