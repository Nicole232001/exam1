import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfovideoPage } from '../infovideo/infovideo';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
  videos=[];
  buscar=BuscarPage;
  infovideos=InfovideoPage;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
      this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
      .subscribe(data => {
        //  console.log(JSON.stringify(data, null, 3));
          if(data.hasOwnProperty('list_ads')){
           this.videos=data['list_ads'];
          }
      },
        error => {
          console.log(JSON.stringify(error));
      });
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad VideosPage');
    }
    verinfovideo(video){
      this.navCtrl.push(this.infovideos,{video:video});
    }
    clickbuscar(){
      this.navCtrl.push(this.buscar,{animals:this.videos});
    }
  }
  
