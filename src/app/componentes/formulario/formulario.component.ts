import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {

  // aqui va las variables
  servicio= 'Bienvenidos Al Agendamiento de Mantenimineto';
  
// esta es una variable de tipo objeto
//con arreglos
mensaje = [
  {
nombre: 'ConsmaCar',
descripcion:'Formulario de Mantenimiento',
autor:''
},
{
  nombre: 'Garay',
  descripcion:'manteniemto',
  autor:''
  }


];
   
   constructor() { 
     this.mensaje[0].autor='xxxxxx';
     this.mensaje[1].autor='xxxxxx';
   }

 

  ngOnInit(){
  }
}
