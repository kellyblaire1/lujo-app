import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  segments:any[] = [];

  constructor() { }

  ngOnInit() {
    this.segments = [
      {
        label: 'Featured',
        value: 'featured'
      },
      {
        label: 'Face',
        value: 'face'
      },
      {
        label: 'Eyes',
        value: 'eyes'
      },
      {
        label: 'Lips',
        value: 'lips'
      },
      {
        label: 'Skincare',
        value: 'skincare'
      }
    ]
  }

}
