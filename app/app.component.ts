import {Component} from '@angular/core';
import {Account} from './account.model';
@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  styleUrls: ['app/app.component.css']
  // template: `
  //   <alert type="info">ng2-bootstrap hello world!</alert>
  //     <pre>Selected date is: <em *ngIf="dt">{{ getDate() | date:'fullDate'}}</em></pre>
  //     <h4>Inline</h4>
  //     <div style="display:inline-block; min-height:290px;">
  //       <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
  //     </div>
  // `,
})

export class AppComponent {
  private _selected:Array<boolean> = [false, false]
  private _accounts:Array<Account> = [
    {
      id:1,
      title:"Bank Xyz",
      description:"this is my main bank account",
      balance:501.2
    },
    new Account(2, "Bank Asd", "My secret account", 1024.10)
  ]
  private _nextId = 3
  private createAcc(titleE1:any, descE1:any, balE1:any){
    this._accounts.push(new Account(this._nextId, titleE1.value, descE1.value, balE1.value))
    this._selected.push(false)
    this._nextId++
    titleE1.value = ""
    descE1.value = ""
    balE1.value = 0
  }
  private removeAcc(index:number){
    this._accounts.splice(index, 1)
    this._selected.splice(index, 1)
  }


private select(index:number){
  this._selected[index] = !this._selected[index]
}
  // public dt:Date = new Date();
  // private minDate:Date = null;
  // private events:Array<any>;
  // private tomorrow:Date;
  // private afterTomorrow:Date;
  // private formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  // private format = this.formats[0];
  // private dateOptions:any = {
  //   formatYear: 'YY',
  //   startingDay: 1
  // };
  // private opened:boolean = false;
  //
  // public getDate():number {
  //   return this.dt && this.dt.getTime() || new Date().getTime();
  // }
}
