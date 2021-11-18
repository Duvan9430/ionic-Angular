import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.page.html',
  styleUrls: ['./modal-detalle.page.scss'],
})
export class ModalDetallePage implements OnInit {

  @Input() peliculaReservada: any;
  @Input() dataUsuario: any;
  public nombreUser;
  public edad;
  public tipoDocumento;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  
    this.nombreUser = this.dataUsuario[0].nombre;
    this.edad = this.dataUsuario[0].edad;
    this.tipoDocumento =  this.dataUsuario[0].tipo;
  }
  closeModal(){
    this.modalController.dismiss({
      'dismissed':true
    });
  }
}
