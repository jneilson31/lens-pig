import { Component, OnInit } from '@angular/core';
import { PricesService } from '../../shared/services/prices.service';
import { Http, Headers, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Rx";
import { LinksService } from '../../shared/services/links.service';

@Component({
  selector: 'app-most-popular-brand',
  templateUrl: './most-popular-brand.component.html',
  styleUrls: ['./most-popular-brand.component.scss']
})
export class MostPopularBrandComponent implements OnInit {

  constructor(private priceService: PricesService, private http: Http, private linksService: LinksService) { }

  acLensPrice = this.priceService.getPrice("aclens");
  acLensLink = this.linksService.getLink("aclens");
  lensPrice = this.priceService.getPrice("lens");
  lensLink = this.linksService.getLink("lens");
  contactsPrice = this.priceService.getPrice("1800Contacts")
  contactsLink = this.linksService.getLink("1800Contacts");

  ngOnInit() {
  }



}
