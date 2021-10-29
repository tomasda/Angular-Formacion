import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
    <h1>{{title}}</h1>
    <h2>Incremental</h2>
    <h2>Base: <strong>{{base}}</strong></h2>
    <button (click)="acumular2(-base)">{{-base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular2(base)">{{base}}</button>
    `
})
export class ContadorComponent{
    title = 'App Contador';
    public prueba:string = 'prueba de código';
    numero:number = 10;
    base:number = 5;
  
    acumular(operacion:boolean){
      if (operacion) this.numero +=1; else this.numero-=1;
      return this.numero;
    }
    acumular2(valor:number){
      return this.numero += valor;
    }
}