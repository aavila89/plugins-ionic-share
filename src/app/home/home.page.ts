import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
import { Camera, CameraResultType, ImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  options: ImageOptions = {
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  };
  constructor() {}

  async shareInfo() {
    const {value}  = await Share.canShare();
    if (value) {
      await Share.share({
        title: 'Ionic plugins expert',
        text: 'Welcome to my YouTube channel',
        url: 'https://medium.com/@avilaatencioa',
        dialogTitle: 'Share with buddies',
      });
    }
  }

  async shareImage() {
    // Share local file using url parameter
    const {value}  = await Share.canShare();
    if (value) {
      const photo = await Camera.getPhoto(this.options);
      await Share.share({
        url: photo.path,
      });
    }
  }
}
