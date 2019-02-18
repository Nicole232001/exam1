import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimalesPage } from '../animales/animales';
import { VideosPage } from '../videos/videos';
import { CompuPage } from '../compu/compu';
import { FavPage } from '../fav/fav';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
tab1=AnimalesPage;
tab2=VideosPage;
tab3=CompuPage;
tab4=FavPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
