import { Component, OnInit, } from '@angular/core';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { ModalDetallePage } from '../modals/modal-detalle/modal-detalle.page';
import axios from 'axios';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { $ } from 'protractor';
import { DataService} from './data.service';


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
  constructor(public service: DataService, private menu: MenuController) {
 
   } 
   ngOnInit(){
    this.service.getDataEpisodios().subscribe(res => {
      this.arrayUsuario = res.articles;
     });
     this.menu.enable(true);
   } 

   llamarMenu(){
     this.menu.toggle();
   }
}
