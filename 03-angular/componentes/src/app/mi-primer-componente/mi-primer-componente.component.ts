import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NoOutputNativeRule} from "codelyzer";

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent
  implements OnInit, OnDestroy {

  @Input() //ATRIBUTO O PROPIEDADES DEL COMPONENTE
  public titulo:string;

  @Input()
  public imagen:string;

  @Input()
  public textoImagen:string;

  @Input()
  public textoBoton:string;

  @Input()
  public width: string;

  @Input()
  public heigth: string;

  @Input()
  public valor1: number;

  @Input()
  public valor2: number;

  @Input()
  public resSuma: number;

  @Input()
  public resResta: number;

  @Input()
  public resMulti: number;

  @Input()
  public resDivision: number;

  @Input()
  public respuesta: number;


  @Output() //EVENTO
  public cambioSueldo = new EventEmitter();

  @Output()
  public aumWidth = new EventEmitter();

  @Output()
  public aumHeight = new EventEmitter();

  constructor() {
    console.log('instanciando');
  }


  ngOnInit(): void { //clase lista
    console.log('Lista');
    console.log(this.titulo);
  }

  ngOnDestroy(): void { //clase destruida
  }

  saludar(){
    alert("Hola");
  }

  aumentarSueldo(){

    //this.textoBoton = this.textoBoton + 1; //Al hacer esto solo concatena STRINGS

    //this.textoBoton = (Number(this.textoBoton) + 1).toString(); //Así se debe hacer
    this.textoBoton = (+this.textoBoton + 1).toString()+"px"; //Otra solución,
    this.cambioSueldo.emit(this.textoBoton);
  }


  valorUno(valor){ //object
    //let a = typeof valor;
    //this.valor1 = valor.srcElement().va
    console.log(valor.srcElement.value);
    this.valor1 = Number(valor.srcElement.value);
    //this.valor1 = valor;
  }

  valorDos(valor){
    //this.valor2 = valor;
    console.log(valor.srcElement.value);
    this.valor2 = Number(valor.srcElement.value);
  }

  operar(){
    this.resSuma = this.valor1 + this.valor2;
    this.resResta = this.valor1 - this.valor2;
    this.resMulti = this.valor1 * this.valor2;
    this.resDivision = this.valor1 / this.valor2;
  }

  sumar(){
      this.respuesta = this.valor1 + this.valor2;

  }

  restar(){
    this.respuesta = this.valor1 - this.valor2;
  }

  multi(){
    this.respuesta = this.valor1 * this.valor2;
  }

  dividir(){
    this.respuesta = this.valor1 / this.valor2;
  }


  aumentarHeight(){
    this.heigth = (+this.heigth +1).toString();
    this.aumHeight.emit(this.heigth);
    this.aumentarWidth();

  }

  aumentarWidth(){
    this.width = (+this.width +1).toString();
    this.aumWidth.emit(this.width);
  }



}




// class (etiqueta html) (web - component)
//instanciar clase
//clase lista
//clase se destruye
