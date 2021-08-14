import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InstructoresService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-listado-instructores',
  templateUrl: './listado-instructores.component.html',
  styleUrls: ['./listado-instructores.component.css']
})
export class ListadoInstructoresComponent implements OnInit {
  @Output() onVerListadoClases = new EventEmitter();
  @Output() onverMiniaturaClases = new EventEmitter();
  regionVisible:String = '';
  usuarioInstructor: String = '';
  passwordInstructor: String = '';
  nombreInstructor: String = '';
  ImagenInstructor: String = '';

  instructores:any = [];
  constructor(
    private instructorService: InstructoresService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.instructorService.obtenerInstructores().subscribe(
      res=>{
        this.instructores = res;
        console.log(this.instructores);

      },
      error=> console.log(error)
    );

  }
  abrirModal(modal){
    this.modalService.open(
      modal,
      {
        size: 'md'
      }
    );

  }
  instructorSeleccionado(instructor){
    console.log('El id del instructor es', instructor._id)
    this.onverMiniaturaClases.emit(instructor);
  }
  guardarInstructor(){
    console.log('Usuario', this.usuarioInstructor);
    console.log('Password', this.passwordInstructor);
    console.log('Nombre', this.nombreInstructor);
    console.log('Imagen', this.ImagenInstructor);
    const data = {
      usuario: this.usuarioInstructor,
      password: this.passwordInstructor,
      nombre: this.nombreInstructor,
      imagen: this.ImagenInstructor
    }
    this.instructorService.guardarInstructor(data).subscribe(
      res=>{
        console.log(res);
        this.modalService.dismissAll()
        this.instructorService.obtenerInstructores().subscribe(
          res=>{
            console.log(res);
          },
          error=>console.log(error)
        );
      },
      error=>console.log(error)
    );
  }
 

}
