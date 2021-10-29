import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'heroe.component.html'
})
export class HeroComponent{
    title:string = 'Heroe';
    name:string='Ironman';
    edad:number=45;

    getName():string{
        return `${this.name} - ${this.edad}`;
    }

    get nombreCapitalizado():string{
        return this.name.toUpperCase();
    }
    cambiarNombre():void{
        this.name='Spiderman';
    }
    cambiarEdad():void{
        this.edad=30;
    }
}