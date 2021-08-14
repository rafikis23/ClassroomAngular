import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructoresService {

  constructor(private httpClient:HttpClient) { }

  obtenerInstructores():Observable<any>{
    return  this.httpClient.get('http://localhost:8888/instructores', {}); 
    console.log('Obtener la lista de instructores');
  }
  obtenerMiniaturas(idInstructor):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/instructores/${idInstructor}/miniaturaClases`,{});
    console.log('Obtener las miniaturas de una clase de un instructor seleccionado');
  }
  obtenerClases(idInstructor):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/instructores/${idInstructor}/listadoClases`, {});
    console.log('Obtener el listado de clases de un instructor');
  }
  guardarInstructor(data):Observable<any>{
    return this.httpClient.post('http://localhost:8888/instructores/instructor',
     {
       usuario : data.usuario,
       password: data.password,
       nombre: data.nombre,
       imagen: data.imagen
     }
     );
  }
}
