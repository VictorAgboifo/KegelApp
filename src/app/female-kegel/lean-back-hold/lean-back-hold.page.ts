import { Component, ViewChild } from '@angular/core';
import { LeanBackHoldPageModule } from './lean-back-hold.module';

@Component({
  selector: 'app-lean-back-hold',
  templateUrl: './lean-back-hold.page.html',
  styleUrls: ['./lean-back-hold.page.scss'],
})
export class LeanBackHoldPage {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}

