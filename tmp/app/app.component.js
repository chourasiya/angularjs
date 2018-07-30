"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var account_model_1 = require("./account.model");
var AppComponent = (function () {
    function AppComponent() {
        this._selected = [false, false];
        this._accounts = [
            {
                id: 1,
                title: "Bank Xyz",
                description: "this is my main bank account",
                balance: 501.2
            },
            new account_model_1.Account(2, "Bank Asd", "My secret account", 1024.10)
        ];
        this._nextId = 3;
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
    AppComponent.prototype.createAcc = function (titleE1, descE1, balE1) {
        this._accounts.push(new account_model_1.Account(this._nextId, titleE1.value, descE1.value, balE1.value));
        this._selected.push(false);
        this._nextId++;
        titleE1.value = "";
        descE1.value = "";
        balE1.value = 0;
    };
    AppComponent.prototype.removeAcc = function (index) {
        this._accounts.splice(index, 1);
        this._selected.splice(index, 1);
    };
    AppComponent.prototype.select = function (index) {
        this._selected[index] = !this._selected[index];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map