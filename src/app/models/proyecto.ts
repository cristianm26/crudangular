export interface ListaProyectos {
  proyecto: Proyecto[];
}

export class Proyecto {
  id?: number;
  nombre: string;
  prioridad: number;
  descripcion: string;
  fecha_entrega: string;
  constructor(nombre: string, prioridad: number, descripcion: string, fecha_entrega: string){
    this.nombre= nombre ;
    this.prioridad=prioridad  ;
    this.descripcion=descripcion ;
    this.fecha_entrega=fecha_entrega  ;
  }
} 