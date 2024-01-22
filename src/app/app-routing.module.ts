import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import {ProductosComponent} from '../app/pages/productos/productos.component';

const routes: Routes = [


  { path: '', component: HomeComponent  },
  { path: 'productos', component: ProductosComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
