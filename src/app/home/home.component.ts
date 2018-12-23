import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loadedFeature = 'byPopularBrand'

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  constructor() { }

  ngOnInit() {
  }

}
