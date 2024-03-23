import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bird-dog-l',
  templateUrl: './bird-dog-l.page.html',
  styleUrls: ['./bird-dog-l.page.scss'],
})
export class BirdDogLPage {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}
