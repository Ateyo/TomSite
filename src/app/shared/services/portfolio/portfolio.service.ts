import { signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortfolioItem } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private _response: any;
  private _items = signal<PortfolioItem[]>([]);

  constructor(private _http: HttpClient) {
    this._http.get('assets/data.json').subscribe((response) => {
      this._response = response;
      this._items.set(this._response);
      console.log(this._items());
    });
  }

  get items() {
    return this._items;
  }

  getItemByTitle(title: string) {
    return this._items().find((item) => item.title === title);
  }

  getItemById(id: string) {
    return this._items().find((item) => item.id === id);
  }
}
