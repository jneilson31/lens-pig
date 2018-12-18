import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
    //this.selectedTab.emit(clickedTab);
  }

  // public scrollToLearnMore(): void {
	// 	$([document.documentElement, document.body]).animate({
	// 		scrollTop: $("#learnMore").offset().top
	// 	}, 350);
	// }
}
