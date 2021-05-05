import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {

  constructor(
    public firestoreService: FirestoreService) { }

  ngOnInit() {}
  //const path= '/mantenimeinto/90pEXY3Hf8I0nmSJmuVe';
  
}
