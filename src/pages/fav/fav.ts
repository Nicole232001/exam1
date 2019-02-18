import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { InfoanimalPage } from '../infoanimal/infoanimal';

/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {
items=[];
animalessPage=InfoanimalPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav:FavoritosProvider) {
    this.items=this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }
  verInfo(item){
    this.navCtrl.push(this.animalessPage,{animal:item});
  }
}
