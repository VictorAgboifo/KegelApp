import { Component, ViewChild } from '@angular/core';
import { LeanBackKneeTuckPageModule } from './lean-back-knee-tuck.module';

@Component({
  selector: 'app-lean-back-knee-tuck',
  templateUrl: './lean-back-knee-tuck.page.html',
  styleUrls: ['./lean-back-knee-tuck.page.scss'],
})
export class LeanBackKneeTuckPage {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}

