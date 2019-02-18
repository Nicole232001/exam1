import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfocompuPage } from '../infocompu/infocompu';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the CompuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compu',
  templateUrl: 'compu.html',
})
export class CompuPage {
  compus=[];
  buscar=BuscarPage;
  infocompu=InfocompuPage;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) { 
      this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
      .subscribe(data => {
          // console.log(JSON.stringify(data, null, 3));
         if(data.hasOwnProperty('list_ads')){
            this.compus=data['list_ads'];
           }
      },
        error => {
          console.log(JSON.stringify(error));
      });
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad CompuPage');
    }
    verinfocompu(compu){
      this.navCtrl.push(this.infocompu,{compu:compu});
    }
    clickbuscar(){
      this.navCtrl.push(this.buscar,{animals:this.compus});
    }
  }
  