import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bird-dog-r',
  templateUrl: './bird-dog-r.page.html',
  styleUrls: ['./bird-dog-r.page.scss'],
})
export class BirdDogRPage {
  @ViewChild('videoPlayer') videoPlayer: any;

  constructor() {}

  playVideo(videoPlayer: { play: () => void; }) {
    videoPlayer.play();
  }
}

