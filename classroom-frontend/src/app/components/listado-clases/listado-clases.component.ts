import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InstructoresService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-listado-clases',
  templateUrl: './listado-clases.component.html',
  styleUrls: ['./listado-clases.component.css']
})
export class ListadoClasesComponent implements OnInit {
  @Output() onVerDetalle = new EventEmitter();
  clases: any = [];
  constructor(private instructorService: InstructoresService) { }

  ngOnInit(): void {
  }

  obtenerClases(idInstructor){
    this.instructorService.obtenerClases(idInstructor).subscribe(
      res=>{
        this.clases = res.clases;
        console.log(this.clases);

      },
      error=>console.log(error)
    );
  }
  verDetalle(idClase){
    console.log('El id de la clase es', idClase);
    this.onVerDetalle.emit(idClase);

  }

}
