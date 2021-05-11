import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProyectosComponent } from './components/listar-proyectos/listar-proyectos.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';

const routes: Routes = [
  {path: '', component: ListarProyectosComponent},
  {path: 'crear-proyecto', component: CrearProyectoComponent},
  {path: 'editar-proyecto/:id', component: CrearProyectoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
