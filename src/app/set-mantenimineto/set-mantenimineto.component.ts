import { Component, OnInit } from '@angular/core';
import { Manteniminetos } from '../modelo';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-set-mantenimineto',
  templateUrl: './set-mantenimineto.component.html',
  styleUrls: ['./set-mantenimineto.component.scss'],
})
export class SetManteniminetoComponent implements OnInit {

newMantenimeitos:Manteniminetos = {

  nombre: '',
  precio: null,
  tiempo:'',
  foto: '',
  id : this.firestoreService.getId(),
  fecha: new Date()
};
 private path = 'mantenimeinto/';
  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {}

  guardarMantenimientos(){

 //const id= this.firestoreService.getId();
this.firestoreService.createDoc(this.newMantenimeitos,this.path,this.newMantenimeitos.id);

  }

}
