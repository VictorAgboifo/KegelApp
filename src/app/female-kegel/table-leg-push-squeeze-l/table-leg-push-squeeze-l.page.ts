import { Component, ViewChild } from '@angular/core';
import { TableLegPushSqueezeLPageModule } from './table-leg-push-squeeze-l.module';

@Component({
  selector: 'app-table-leg-push-squeeze-l',
  templateUrl: './table-leg-push-squeeze-l.page.html',
  styleUrls: ['./table-leg-push-squeeze-l.page.scss'],
})
export class TableLegPushSqueezeLPage {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}

