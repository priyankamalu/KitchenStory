import { Component } from '@angular/core';
import {MenuService} from 'src/app/services/menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private menuService:MenuService){

}
onSelect(feature:string){
  this.menuService.featureSelectedEvent.next(feature);
}
}
