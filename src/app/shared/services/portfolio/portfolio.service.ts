import { OnDestroy, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioItem } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService implements OnDestroy {
  private _items = signal<PortfolioItem[]>([]);
  private _dataLoaded = false;
  private _originalIds: Set<string> = new Set();
  httpRequest?: Subscription;

  constructor(private _http: HttpClient) {
    this.loadItems();
  }

  loadItems(): void {
    if (!this._dataLoaded) {
      this.httpRequest = this._http
        .get('assets/data.json')
        .subscribe((response) => {
          this._items.set(response as PortfolioItem[]);
          this._originalIds = new Set(this._items().map((item) => item.id));

          this._dataLoaded = true;
        });
    }
  }

  get items(): PortfolioItem[] {
    return this._items();
  }

  get itemsSignal() {
    return this._items.asReadonly();
  }

  get originalIds(): Set<string> {
    return this._originalIds;
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
      items.push(item);
      return items;
    });

    return new Promise((resolve) => {
      resolve(this._items());
    });
  }

  ngOnDestroy(): void {
    this.httpRequest?.unsubscribe();
  }
}
