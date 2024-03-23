import { Component, ViewChild } from '@angular/core';
import { TableLegPushSqueezeRPageModule } from './table-leg-push-squeeze-r.module';

@Component({
  selector: 'app-table-leg-push-squeeze-r',
  templateUrl: './table-leg-push-squeeze-r.page.html',
  styleUrls: ['./table-leg-push-squeeze-r.page.scss'],
})
export class TableLegPushSqueezeRPage {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}
