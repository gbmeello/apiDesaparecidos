import { Routes } from '@angular/router';
import {DesaparecidoComponent} from "./pages/desaparecido/desaparecido.component";
import {DesaparecidoDetailsComponent} from "./pages/desaparecido-details/desaparecido-details.component";

export const routes: Routes = [

  {

    path: '',
    component: DesaparecidoComponent
  },
  {
    path: 'details/:id',
    component: DesaparecidoDetailsComponent
  }


];
