import { Component,OnInit } from '@angular/core';
import { Recepy } from 'src/app/models/Recepy.model';
import {RecepyService} from 'src/app/services/recepy.service';
import { ShoppingListService } from '../services/ShoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  implements OnInit{
 recepys:Recepy[];
  constructor(private recepyService:RecepyService,private shoppingListService:ShoppingListService)
  {

  }
  ngOnInit():void{
  this.recepys=this.shoppingListService.getRecepys();
     //this.recepys=rec;
    //});
  }

}
