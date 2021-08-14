import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {

  constructor(private httpClient: HttpClient) { }

  guardarParticipante(data):Observable <any>{
    return this.httpClient.post('http://localhost:8888/participantes/participante',
     {
       nombre: data.nombre,
       imagen: data.imagen
     }
     )
  }
}
