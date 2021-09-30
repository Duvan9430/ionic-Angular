import { Component, OnInit, } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalDetallePage } from '../modals/modal-detalle/modal-detalle.page';
import axios from 'axios';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { $ } from 'protractor';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  id= 0;
  public arrayData = [];
  public nombre: string = "Hola Mundo";
  public variableGuardado = false;
  public frm: FormGroup;

  arrayClases =[];
  pelculasReservadas = [];
  arrayUsuario = [];
  constructor(public loadingController: LoadingController, public modalController: ModalController,    private _formBuilder: FormBuilder,) {
    // this.cargando()
   } 
   ngOnInit(){
     this.cargarFrm();
     this.arrayUsuario = [
      {id:1, nombre: 'King kong', descripcion: 'desccrubir la era' },
      {id:2,  nombre: 'Rey Leon', descripcion: 'desccrubir la era'},
      {id:3, nombre: 'Era huielo10', descripcion: 'desccrubir la era' },
      {id:4, nombre: 'Pepa pit', descripcion: 'desccrubir la era' },
      {id:5, nombre: 'Que paso hoy', descripcion: 'desccrubir la era' },
    ];
   }
   detalleUsuarioPelicula(data){
    let validarExistente = this.pelculasReservadas.find(a => a.id == data.id);
     if(validarExistente != null){
        alert("la pelicula ya fue agregada");
     }else{
      this.pelculasReservadas.push(data);
      this.modalDetalle(this.pelculasReservadas,this.arrayClases)
     }
    

   }
  
   async modalDetalle(item1,item2) {
    const modal = await this.modalController.create({
      component: ModalDetallePage,
      cssClass: 'my-custom-class',
      componentProps: {
        peliculaReservada: item1,
        dataUsuario: item2,
      }
    });
    return await modal.present();

  }
  guardar(){
   
    if(this.arrayClases.length == 0){
      let id = this.frm.get("id").value;
      let nombre = this.frm.get("nombre").value;
      let tipo = this.frm.get("tipo").value;
      let edad = this.frm.get("edad").value;
      
      this.arrayClases.push({id:this.id++,nombre:nombre,tipo:tipo,edad:edad});
      
      this.frm.get("id").setValue(null);
      this.frm.get("nombre").setValue(null);
      this.frm.get("tipo").setValue(null);
      this.frm.get("edad").setValue(null);
      this.frm.get("nombre").disable();
      this.frm.get("tipo").disable();
      this.frm.get("edad").disable();
      this.variableGuardado = true;
    }
    
    
  }
  eliminar(item){
   
    const id = this.consultarFiltro(item);
    if(id != null){
      this.arrayClases.splice(this.arrayClases.indexOf(id),1);
    } 
   
  }

  consultarFiltro(id){
    return this.arrayClases.find(a=> a.id == id);
  }
 
  cargarFrm(){
    this.frm = this._formBuilder.group({
      id: [this.id++],
      nombre:    [null,Validators.required],
      tipo:   [null,Validators.required],
      edad: [null,Validators.required]
    });
  }
}
