import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastController} from 'ionic-angular';
/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {
favoritos=[];
  constructor(public toastCtrl:ToastController) {
    console.log('Hello FavoritosProvider Provider');
  }
addFavoritos(animal){
  this.favoritos.push(animal);
    const toast = this.toastCtrl.create({
      message: 'Mascota agregada a favoritos',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  getFavoritos(){
    return this.favoritos;
  }
}