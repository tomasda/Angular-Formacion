import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[]=['Spiderman','Thor','Hulk'];
  borrado:string = '';

  borrarHero(){
    //delete this.heroes[1];
    //  let result:string[] = this.heroes.splice(1,1);
    //  this.borrado = result.toString();
    this.borrado = (this.heroes.splice(1,1)).toString();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
