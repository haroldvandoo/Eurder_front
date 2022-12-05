import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map, Observable} from "rxjs";
import {Item} from "../../model/items-overview/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  _backEndUrl: string;

  constructor(private http: HttpClient) {
    this._backEndUrl = `${environment.backendUrl}/items`
  }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this._backEndUrl);
  }

}
