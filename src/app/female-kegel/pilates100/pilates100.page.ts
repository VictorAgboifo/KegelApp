import { Component, ViewChild } from '@angular/core';
import { Pilates100PageModule } from './pilates100.module';

@Component({
  selector: 'app-pilates100',
  templateUrl: './pilates100.page.html',
  styleUrls: ['./pilates100.page.scss'],
})
export class Pilates100Page {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}
