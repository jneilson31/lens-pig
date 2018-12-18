import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-search-tabs',
  templateUrl: './filter-search-tabs.component.html',
  styleUrls: ['./filter-search-tabs.component.scss']
})
export class FilterSearchTabsComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
