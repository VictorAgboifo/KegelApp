import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-cat-cow',
  templateUrl: './cat-cow.page.html',
  styleUrls: ['./cat-cow.page.scss'],
})
export class CatCowPage {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}
