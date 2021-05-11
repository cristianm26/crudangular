import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Proyecto } from '../../models/proyecto';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
  proyectoForm : FormGroup; 
  titulo = 'Crear Proyecto';
  id: string | null;
  constructor(private fb : FormBuilder, private router: Router, private toastr: ToastrService, private proyectoService: ProyectoService, private aRoute: ActivatedRoute) { 
    this.proyectoForm = this.fb.group({
          nombre: ['', Validators.required] ,
          prioridad: ['', Validators.required] ,
          descripcion: ['', Validators.required] ,
          fecha_entrega: ['', Validators.required] ,
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar()
  }
  agregarProyecto(){
    const proyecto : Proyecto = {
      nombre : this.proyectoForm.get('nombre').value,
      prioridad : this.proyectoForm.get('prioridad').value,
      descripcion : this.proyectoForm.get('descripcion').value,
      fecha_entrega : this.proyectoForm.get('fecha_entrega').value,
    }
    if(this.id!==null){
        //editamos producto
      this.proyectoService.editarProyecto(this.id, proyecto).subscribe(data=> {
        this.toastr.info(' El Proyecto fue actualizado con exito!', 'Proyecto Actualizado ');
        this.router.navigate(['/'])
      })
    }else{
      //agregamos producto
      this.proyectoService.guardarProyecto(proyecto).subscribe(data=> {
        this.toastr.success(' El Proyecto fue registrado con exito!', 'Proyecto Registrado ');
        this.router.navigate(['/'])
      }, error=> {
        console.log(error)
        this.proyectoForm.reset()
      })
    }
   
  }

  esEditar(){
    if (this.id !== null ) {
      this.titulo = 'Editar Proyecto';
      this.proyectoService.obtenerProyecto(this.id).subscribe(data=> {
        this.proyectoForm.setValue({
          nombre : data.nombre,
          prioridad : data.prioridad,
          descripcion : data.descripcion ,
          fecha_entrega : data.fecha_entrega ,
        })
      })
    }
  }
}
