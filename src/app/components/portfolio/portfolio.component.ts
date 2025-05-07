import { Component, signal, OnInit, effect } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PortfolioListItemComponent } from './components/list-item/portfolio-list-item.component';

import { PortfolioItem } from '../../shared/interfaces';
import { PortfolioService } from '../../shared/services/portfolio/portfolio.service';
import { ItemFormComponent } from './components/item-form/item-form.component';

@Component({
  selector: 'app-portfolio',
  imports: [SharedModule, PortfolioListItemComponent, ItemFormComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  items: PortfolioItem[] = [];
  response: any;
  isFormOpen = false;

  constructor(private _portfolioService: PortfolioService) {
    console.log('PortfolioComponent initialized');
    //this.items = this._portfolioService.items();
    //console.log('Items:', this.items);
    effect(() => {
      console.log('Signal effect triggered');
      this.items = this._portfolioService.items;
    });
  }

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }
}
