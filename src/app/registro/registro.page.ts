import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public frm: FormGroup;
  constructor( private _formBuilder: FormBuilder,public alerta: AlertController) { }

  ngOnInit() {
    this.cargarFrm();
  }
  cargarFrm(){
    this.frm = this._formBuilder.group({
      email:   new FormControl(null,Validators.compose([ Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
      password_1:    new FormControl (null,Validators.required),
      password_2:  new FormControl(null,Validators.required),
    });
  }
   registrar(){

    let formRegistros = this.frm.value;
    let user = {
      email: formRegistros.email,
      password_1: formRegistros.password_1,
      password_2: formRegistros.password_2
    }
    localStorage.setItem('user',JSON.stringify(user));
    this.frm.get('email').setValue(null);
    this.frm.get('password_1').setValue(null);
    this.frm.get('password_2').setValue(null);
  }
 
}
