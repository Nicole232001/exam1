import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfocompuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infocompu',
  templateUrl: 'infocompu.html',
})
export class InfocompuPage {
  compu=[];
  imgsss=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.compu=this.navParams.get('compu');
    if(this.compu.ad.hasOwnProperty('images')){
      this.imgsss=this.compu.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfocompuPage');
  }

}
