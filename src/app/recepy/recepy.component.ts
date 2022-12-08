import { Component } from '@angular/core';
import {RecepyService} from 'src/app/services/recepy.service';

@Component({
  selector: 'app-recepy',
  templateUrl: './recepy.component.html',
  styleUrls: ['./recepy.component.css'],
  providers: [RecepyService]
})
export class RecepyComponent {

}
