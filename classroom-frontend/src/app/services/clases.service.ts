import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor(private httpClient: HttpClient) { }

  obtenerDetalle(idClase):Observable<any> {
    return this.httpClient.get(`http://localhost:8888/clases/${idClase}/detalleClase`, {});
    console.log('Obtener el detalle de una clase');
  }
  obtenerComentarios(idClase):Observable <any> {
    return this.httpClient.get(`http://localhost:8888/clases/${idClase}/comentarios`, {});
    console.log('Obtener los comentarios de la clase');
  }
  obtenerParticipantes(idClase):Observable <any> {
    return this.httpClient.get(`http://localhost:8888/clases/${idClase}/listaParticipantes`, {})
    console.log('Obtener los participantes de una clase');
  }
  obtenerAsignaciones(idClase):Observable <any> {
    return this.httpClient.get(`http://localhost:8888/clases/${idClase}/asignaciones`,{});
    console.log('Obtener las asignaciones de una clase');
  }
}
