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
    });
  }

  get items(): PortfolioItem[] {
    console.log('Fetching items:', this._items());
    return this._items();
  }

  get itemsSignal() {
    return this._items.asReadonly(); // Expose a readonly signal
  }

  getItemByTitle(title: string) {
    return this._items().find((item) => item.title === title);
  }

  getItemById(id: string) {
    return this._items().find((item) => item.id === id);
  }

  getNextId() {
    return this._items().length + 1;
  }

  addItem(item: PortfolioItem): Promise<PortfolioItem[]> {
    this._items.update((items) => {
      console.log('Adding item:', item);
      console.log('Current items:', items);
      items.push(item);
      return items;
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Updated items:', this._items());
        resolve(this._items());
      }, 1000);
    });
  }
}
