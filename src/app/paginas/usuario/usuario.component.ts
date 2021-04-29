import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { AuthService } from "../../servicios/auth.service";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  email: string;
  password: string

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {}

  onSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( res =>{
      this.router.navigate(['/inicio']);
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'))
  }

}