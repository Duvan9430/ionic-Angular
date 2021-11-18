import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public frm: FormGroup;
  public array
  constructor( private _formBuilder: FormBuilder,  public router: NavController, public alerta : AlertController,  private menu: MenuController) { }

  ngOnInit() {
    this.cargarFrm();
    if(JSON.parse(localStorage.getItem('Logeado')) == true){
      this.validarLogeo();
    }else{
      this.router.navigateRoot('/login');
    }
    this.menu.enable(false);
  }
  cargarFrm(){
    this.frm = this._formBuilder.group({
      email:  new FormControl(null,Validators.compose([ Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
      password:  new FormControl(null,Validators.required),
    });
  }
   async ingresar(){
    let formRegistros = this.frm.value;
    let userRegistrado = JSON.parse(localStorage.getItem('user'));
    if(userRegistrado.email == formRegistros.email && userRegistrado.password_1 == formRegistros.password){ 
       localStorage.setItem('Logeado','true');
       this.router.navigateRoot('/home');
    }else{
      const alerta = await this.alerta.create({
        message:"email o passowrd incorrecto",
        buttons:["OK"]
      });
     await alerta.present()
    }
  }
   async validarLogeo(){
    this.router.navigateRoot('/home');
    const  alerta =  await this.alerta.create({
      message:"El usuario ya se encuentra logeado",
      buttons:["OK"]
    });
    await alerta.present()
  }
}
