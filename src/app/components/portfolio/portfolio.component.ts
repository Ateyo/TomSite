import { Component, signal, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PortfolioItemComponent } from './components/item/portfolio-item.component';
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
  items = signal<PortfolioItem[]>([]);
  response: any;
  constructor(private _portfolioService: PortfolioService) {}

  ngOnInit() {
    this.items = this._portfolioService.items;
    console.log(this.items());
  }
}
