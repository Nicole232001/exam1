import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoanimalPage } from '../infoanimal/infoanimal';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the AnimalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animales',
  templateUrl: 'animales.html',
})
export class AnimalesPage {
animals=[];
buscar=BuscarPage;
infoanimals=InfoanimalPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es')
    .subscribe(data => {
      // console.log(JSON.stringify(data, null, 3));
       if(data.hasOwnProperty('list_ads')){
         this.animals=data['list_ads'];
       }
    },
      error => {
        console.log(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalesPage');
  }
  verinfoanimals(animal){
    this.navCtrl.push(this.infoanimals,{animal:animal});
  }
  clickbuscar(){
    this.navCtrl.push(this.buscar,{animals:this.animals});
  }
}
