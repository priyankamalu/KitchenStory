import { Component,Input,EventEmitter } from '@angular/core';
import { Recepy } from 'src/app/models/Recepy.model';
import {RecepyService} from 'src/app/services/recepy.service';

@Component({
  selector: 'app-recepy-item',
  templateUrl: './recepy-item.component.html',
  styleUrls: ['./recepy-item.component.css']
})
export class RecepyItemComponent {
@Input() recepy:Recepy;
constructor(private recepyService:RecepyService){

}
onRecepySelected()
{
  this.recepyService.recepyEvent.emit(this.recepy);
}

}
