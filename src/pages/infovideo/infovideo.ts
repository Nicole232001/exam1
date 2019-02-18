import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.video=this.navParams.get('video');
    if(this.video.ad.hasOwnProperty('images')){
      this.imgss=this.video.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfovideoPage');
  }

}
