import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParticipantesService } from 'src/app/services/participantes.service';

@Component({
  selector: 'app-detalle-clase',
  templateUrl: './detalle-clase.component.html',
  styleUrls: ['./detalle-clase.component.css']
})
export class DetalleClaseComponent implements OnInit {
  @Output() onVerClases = new EventEmitter();
  faUserPlus = faUserPlus;
  detalleClase: any = {};
  anuncios:any = [];
  instructores:any = {};
  regionVisible: String = '';
  participantes:any = [];
  asignaciones:any = [];
  nombreParticipante: String = '';
  imagenParticipante: String = '';
  
  constructor(
    private claseService:ClasesService,
    private participanteService: ParticipantesService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
  }
  nuevoParticipante(modal){
    this.modalService.open(
      modal,
      {
        size: 'md'
      }
    );

  }
  verPreguntas(idClase){
    this.regionVisible = '';
    this.onVerClases.emit(idClase);
    // this.onVerClases.emit(idClase);
  }
  verDetalle(region){
    this.regionVisible = region;
    console.log('La region detalle es',this.regionVisible);
  }
  verAsignatura(region){
    this.regionVisible = region;
    console.log('La region es', this.regionVisible);
    
    return this.regionVisible;
    
  }
  verParticipantes(region){
    this.regionVisible = region;
    console.log('La region es', this.regionVisible);
    
    return this.regionVisible;
    
  }
  obtenerDetalleClase(idClase){
    this.claseService.obtenerDetalle(idClase).subscribe(
      res=>{
        this.detalleClase = res;
        this.anuncios = res.anuncios;
        this.instructores = res.instructores;
        console.log(this.detalleClase);
      },
      error=> console.log(error)
    );
    this.claseService.obtenerParticipantes(idClase).subscribe(
      res=>{
        this.participantes = res.participantes;
        console.log('Los participantes', this.participantes);
      },
      error=>console.log(error)
    );
    this.claseService.obtenerAsignaciones(idClase).subscribe(
      res=>{
        this.asignaciones = res.asignaciones;
        console.log('Las asignaciones', this.asignaciones);
      },
      error=>console.log(error)
    );
    this.claseService.obtenerComentarios(idClase).subscribe(
      res=>{
        this.anuncios = res.anuncios;
        console.log(this.anuncios);
        this.instructores = res.instructores;
        console.log(this.instructores);
      },
      error=>console.log(error)
    );
    
  }
  guardarParticipante(){
    console.log('El nombre del participante', this.nombreParticipante);
    console.log('La imagen del participante', this.imagenParticipante);
    const data = {
      "nombre": this.nombreParticipante,
      "imagen": this.imagenParticipante
    }
    this.participanteService.guardarParticipante(data).subscribe(
      res=>{
        console.log(res);
        this.modalService.dismissAll()
      },
      error=>console.log(error)
    );
  }

}
