import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoanimalPage } from '../infoanimal/infoanimal';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
animals=[];
items=[];
animalesPage=InfoanimalPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animals=this.navParams.get('animals');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }
getItems(ev: any){
  console.log(ev.target.value);
  this.items=this.animals.filter( animal=>{
    return animal.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase())
   
  })
}
verBuscar(item){
  this.navCtrl.push(this.animalesPage,{animal:item});
}
}
