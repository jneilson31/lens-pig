import { Component, OnInit } from '@angular/core';
import { PricesService } from '../../shared/services/prices.service';
import { Http, Headers, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-most-popular-brand',
  templateUrl: './most-popular-brand.component.html',
  styleUrls: ['./most-popular-brand.component.scss']
})
export class MostPopularBrandComponent implements OnInit {

  constructor(private price: PricesService, private http: Http) { }

  acLensPrice = this.price.getPrice("aclens");
  lensPrice = this.price.getPrice("lens");
  contactsPrice = this.price.getPrice("1800Contacts")

  ngOnInit() {
  }



}
