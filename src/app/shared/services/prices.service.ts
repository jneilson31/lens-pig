import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PricesService {
    constructor(private http: Http) {}
    getPrice(store: string) {
        return this.http.get(`https://lens-pig.firebaseio.com/lenses/acuvue-oasys/${store}/price.json`)
        .map(
            (response: Response) => {
                console.log(response.json());
                return response.json();
            }
        )


    }
}

