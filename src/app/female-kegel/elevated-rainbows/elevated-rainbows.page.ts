import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-elevated-rainbows',
  templateUrl: './elevated-rainbows.page.html',
  styleUrls: ['./elevated-rainbows.page.scss'],
})
export class ElevatedRainbowsPage {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}

