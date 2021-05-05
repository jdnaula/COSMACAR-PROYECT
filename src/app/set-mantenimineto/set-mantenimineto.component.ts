import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
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
loading:any;  /// variables
newImagen= '';
newFile= '';

 private path = 'mantenimeinto/';
 
  constructor(public firestoreService: FirestoreService,
              public loadingController: LoadingController,
              public toastController: ToastController,
              public alertController: AlertController
    
    
    ) { }

  ngOnInit() {}

  guardarMantenimientos(){

 //const id= this.firestoreService.getId();
 this.presentLoading(),
this.firestoreService.createDoc(this.newMantenimeitos,this.path,this.newMantenimeitos.id).then(res =>{
      this.loading.dismiss(); 
      this.presentToast('Guardado con Exito');

  }).catch(error =>{
    this.presentToast('Error al Guardar');
});

  }

  async  eliminarMantenimiento(manteniminetos: Manteniminetos ){
  //
  
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      message: 'Seguro desea <strong>Eliminar</strong> este mantenimiento',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
            this.firestoreService.deleteDoc(this.path, manteniminetos.id).then(res =>{
             // this.loading.dismiss(); 
              this.presentToast('Eliminado con Exito');
              this.alertController.dismiss();
        
          }).catch(error =>{
            this.presentToast('Error al Eliminar');
        });
          }
        }
      ]
    });




}

getMantenimiento(){



}


  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Guardando...',
    });
    await this.loading.present();
   // await this.loading.onDidDismiss();
   // console.log('Loading dismissed!');
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  async newImageUpload(event:any) {
    const path ='mantenimineto';
    const name = 'prueba';
    const file = event.target.files[0];
    const res = await this.firestoreService.uploadImag(file, path, name);

    console.log( ' esta es ' ,res)
  }

}
