import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url= 'http://localhost:3100/api/proyectos/'
  constructor(private http: HttpClient) { }

  getProyectos():Observable<any>{
    return this.http.get(this.url)
  }
  eliminarProyecto(id: string): Observable<any>{
    return this.http.delete(this.url + id)
  }
  guardarProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.post(this.url, proyecto)
  }
  obtenerProyecto(id: string): Observable<any>{
    return this.http.get(this.url + id)
  }
  editarProyecto(id: string, proyecto: Proyecto): Observable<any>{
    return this.http.put(this.url + id, proyecto)
  }
}
