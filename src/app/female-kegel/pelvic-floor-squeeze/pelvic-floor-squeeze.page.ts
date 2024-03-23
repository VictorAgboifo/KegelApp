import { Component, ViewChild } from '@angular/core';
import { PelvicFloorSqueezePageModule } from './pelvic-floor-squeeze.module';
@Component({
  selector: 'app-pelvic-floor-squeeze',
  templateUrl: './pelvic-floor-squeeze.page.html',
  styleUrls: ['./pelvic-floor-squeeze.page.scss'],
})
export class PelvicFloorSqueezePage {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}
