import { Component, effect } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PortfolioListItemComponent } from './components/list-item/portfolio-list-item.component';

import { PortfolioItem } from '../../shared/interfaces';
import { PortfolioService } from '../../shared/services/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  imports: [SharedModule, PortfolioListItemComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  items: PortfolioItem[] = [];
  response: any;

  constructor(private _portfolioService: PortfolioService) {
    effect(() => {
      const allItems = this._portfolioService.itemsSignal();
      const originalIds = this._portfolioService.originalIds;
      // New items first, then originals in their original order
      this.items = [
        // New items (not in originalIds)
        ...allItems
          .filter((item) => !originalIds.has(item.id))
          .sort((a, b) => Number(b.id) - Number(a.id)),
        // Original items (in original order)
        ...allItems
          .filter((item) => originalIds.has(item.id))
          .sort((a, b) => Number(a.id) - Number(b.id))
      ];
    });
  }
}
