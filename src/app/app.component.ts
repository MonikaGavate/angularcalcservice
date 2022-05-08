import { Component } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcalcservice';
  sum:number=0;
  constructor(calc:CalcService){
    this.sum=calc.add(1,2,3,4,5);
  }
}
