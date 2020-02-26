import { Component, OnInit } from '@angular/core';
import {DataDbService} from '../../services/data-db.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pasaporteForm',
  templateUrl: './pasaporte.component.html',
  styleUrls: ['./pasaporte.component.scss']
})
export class PasaporteComponent implements OnInit {

  constructor(private dbData: DataDbService) {
    this.pasaporteForm = this.createFormGroup();
  }

  // tslint:disable-next-line:max-line-length
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  sexoPattern: string = 'Hombre' || 'Mujer';
  pasaporteForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(5)]),
      sexo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.sexoPattern)]),
      edad: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  ngOnInit(): void {
  }

  onResetForm() {
    this.pasaporteForm.reset();
  }

  onSaveForm() {
    if (this.pasaporteForm.valid) {
      this.dbData.saveMessage(this.pasaporteForm.value);
      this.onResetForm();
      console.log('Válido');
    } else {
      console.log('No Válido');
    }
  }

  get name() {
    return this.pasaporteForm.get('name');
  }

  get email() {
    return this.pasaporteForm.get('email');
  }

  get message() {
    return this.pasaporteForm.get('message');
  }
  get apellido() {
    return this.pasaporteForm.get('apellido');
  }
  get sexo() {
    return this.pasaporteForm.get('sexo');
  }
  get edad() {
    return this.pasaporteForm.get('edad');
  }
  get cedula() {
    return this.pasaporteForm.get('cedula');
  }
}
