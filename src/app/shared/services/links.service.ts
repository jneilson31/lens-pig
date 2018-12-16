import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/Rx";


@Injectable()
export class LinksService {
    constructor(private http: Http) { }
    getLink(store: string) {
        return this.http.get(`https://lens-pig.firebaseio.com/lenses/acuvue-oasys/${store}/link.json`)
            .map(
                (response: Response) => {
                    console.log(response.json());
                    return response.json();
                }
            )


    }
}

