import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './backend/crud/crud.component';
import { CalificacionComponent } from './paginas/calificacion/calificacion.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { EstadosComponent } from './paginas/estados/estados.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ManteniminetoComponent } from './paginas/mantenimiento/mantenimineto.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { SetManteniminetoComponent } from './set-mantenimineto/set-mantenimineto.component';

const routes: Routes = [

  {
    path: 'registro',
    component: RegistroComponent,
  },


  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'calificacion',
    component: CalificacionComponent,
  },
  {
    path: 'estados',
    component: EstadosComponent,
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
  },
  {
    path: 'contactos',
    component: ContactosComponent,
  },
  {
    path: 'mantenimiento',
    component: ManteniminetoComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
  },
  {
    path: 'setmantenimiento',
    component: SetManteniminetoComponent,
  },

  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
