import { Component, ViewChild } from '@angular/core';
import { DetalleClaseComponent } from './components/detalle-clase/detalle-clase.component';
import { ListadoClasesComponent } from './components/listado-clases/listado-clases.component';
import { ListadoInstructoresComponent } from './components/listado-instructores/listado-instructores.component';
import { MiniaturaClaseComponent } from './components/miniatura-clase/miniatura-clase.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('miniaturaClase') miniaturaComponent:MiniaturaClaseComponent;
  @ViewChild('listaInstructores') instructorComponent:ListadoInstructoresComponent;
  @ViewChild('listaClases') claseComponent:ListadoClasesComponent;
  @ViewChild('detalleClase') detalleComponent: DetalleClaseComponent;
  public isCollapsed = false;
  public isMiniatura = false;
  title = 'classroom-frontend';
  regionVisible:String = '';
  usuarioSeleccionado: String = '';
  usuarioId: String = '';

  verInstructor(instructor){
    this.regionVisible = '';
    this.regionVisible = 'listadoClase';
    console.log('Ver instructores', instructor._id);
    this.usuarioId = instructor._id;
    console.log('Instructor id', this.usuarioId);
    this.usuarioSeleccionado = instructor.imagen;
    console.log('Ver imagen', this.usuarioSeleccionado);
    this.miniaturaComponent.obtenerMiniaturas(instructor._id);
    this.claseComponent.obtenerClases(instructor._id);
  }
  verDetalle(idClase){
    this.regionVisible = 'detalleClase';
    this.detalleComponent.verDetalle(this.regionVisible);
    console.log('El id de la Clase es', idClase);
    this.detalleComponent.obtenerDetalleClase(idClase);
  }
  verMiniatura(idClase){
    console.log('El id clase es',idClase);
    this.regionVisible = 'detalleClase';
    this.detalleComponent.verDetalle(this.regionVisible);
    this.detalleComponent.obtenerDetalleClase(idClase);
  }
  verClases(idClase){
    this.regionVisible = 'listadoClase';
    console.log('El id de clase que retorna es', idClase);
  }
  verClase(){
    this.regionVisible = 'detalleClase';
    this.detalleComponent.verDetalle(this.regionVisible);
    console.log('Se desplegara la opcion de clase');
  }
  verParticipantes(){
    console.log('Se desplegara la opcion de participantes');
    this.regionVisible = 'listadoParticipantes';
    console.log('se desplegara la opcion de participantes');
    this.detalleComponent.verParticipantes(this.regionVisible);
  }
  verAsignaciones(){
    console.log('Se desplegara la opcion de asignaciones');
    this.regionVisible = 'listadoAsignatura';
    this.detalleComponent.verAsignatura(this.regionVisible);
  }
}
