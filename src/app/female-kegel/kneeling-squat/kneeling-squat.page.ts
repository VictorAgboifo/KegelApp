import { Component, ViewChild } from '@angular/core';
import { KneelingSquatPageModule } from './kneeling-squat.module';

@Component({
  selector: 'app-kneeling-squat',
  templateUrl: './kneeling-squat.page.html',
  styleUrls: ['./kneeling-squat.page.scss'],
})
export class KneelingSquatPage {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}

