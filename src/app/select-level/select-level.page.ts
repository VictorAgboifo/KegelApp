
import { Component, OnInit} from '@angular/core';
import {NgIf } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.page.html',
  styleUrls: ['./select-level.page.scss'],
  //imports: [IonicModule, NgIf, RouterLink]
})
export class SelectLevelPage implements OnInit {
  selectedsegment: string = 'male'; 
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.selectedsegment = event.detail.value;
}




}

    