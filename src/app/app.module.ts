import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http'
import { AnimalesPage } from '../pages/animales/animales';
import { VideosPage } from '../pages/videos/videos';
import { CompuPage } from '../pages/compu/compu';
import { InfoanimalPage } from '../pages/infoanimal/infoanimal';
import { InfovideoPage } from '../pages/infovideo/infovideo';
import { InfocompuPage } from '../pages/infocompu/infocompu';
import { TabPage } from '../pages/tab/tab';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { FavPage } from '../pages/fav/fav';
import { BuscarPage } from '../pages/buscar/buscar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimalesPage,
    VideosPage,
    CompuPage,
    InfoanimalPage,
    InfovideoPage,
    InfocompuPage,
    TabPage,
    FavPage,
    BuscarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnimalesPage,
    VideosPage,
    CompuPage,
    InfoanimalPage,
    InfovideoPage,
    InfocompuPage,
    TabPage,
    FavPage,
    BuscarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
