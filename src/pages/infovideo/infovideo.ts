import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the InfovideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infovideo',
  templateUrl: 'infovideo.html',
})
export class InfovideoPage {
  video=[];
  imgss=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav:FavoritosProvider) {
    this.video=this.navParams.get('video');
    if(this.video.ad.hasOwnProperty('images')){
      this.imgss=this.video.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfovideoPage');
  }
  favoritos(video){
    this.fav.addFavoritos(video);
  }
}
