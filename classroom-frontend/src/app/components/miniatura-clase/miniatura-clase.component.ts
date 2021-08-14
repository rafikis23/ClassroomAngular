import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InstructoresService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-miniatura-clase',
  templateUrl: './miniatura-clase.component.html',
  styleUrls: ['./miniatura-clase.component.css']
})
export class MiniaturaClaseComponent implements OnInit {
  @Output() onVerMiniatura = new EventEmitter();
  miniaturas:any = [];
  constructor(private instructorService:InstructoresService) { }

  ngOnInit(): void {
  }
  verDetalle(idClase){
    console.log('El id de la clase es', idClase);
    this.onVerMiniatura.emit(idClase);
  }
  obtenerMiniaturas(idInstructor){
    this.instructorService.obtenerMiniaturas(idInstructor).subscribe(
      res=>{
        this.miniaturas = res.clases
        console.log(this.miniaturas);

      },
      error=> console.log(error)
    );
  }

}
