import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto, ListaProyectos } from '../../models/proyecto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-proyectos',
  templateUrl: './listar-proyectos.component.html',
  styleUrls: ['./listar-proyectos.component.css']
})
export class ListarProyectosComponent implements OnInit {
  listProyectos: Proyecto[]=[]
  constructor(private proyectoService: ProyectoService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.obtenerProyectos()
  }
  obtenerProyectos(){
    this.proyectoService.getProyectos().subscribe(data=> {
     // this.listProyectos.push(...data)
      
      this.listProyectos= data
    }, err=> {
      console.log(err)
    }
    )
  }
  eliminar(id: any){
      this.proyectoService.eliminarProyecto(id).subscribe(data=> {
          this.toastr.error('El proyecto se Elimino con exito' , 'Proyecto Eliminado')
          this.obtenerProyectos()
      }, err=> {
        console.log(err)
      })
  }
}
