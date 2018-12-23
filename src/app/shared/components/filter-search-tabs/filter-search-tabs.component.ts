import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-filter-search-tabs',
  templateUrl: './filter-search-tabs.component.html',
  styleUrls: ['./filter-search-tabs.component.scss']
})
export class FilterSearchTabsComponent implements OnInit {
  //@Output() selectedTab = new EventEmitter<string>();

  tabOption = 'byPopularBrand';

  constructor() { }

  ngOnInit() {
  }

  onSelect(clickedTab: string) {
    this.tabOption = clickedTab;
    this.scrollToAnchor();
    //this.selectedTab.emit(clickedTab);
  }

  public scrollToAnchor(): void {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#filterSearchNav").offset().top - 78
		}, 350);
	}
}
