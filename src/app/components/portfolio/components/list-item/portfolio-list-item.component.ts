import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PortfolioItem } from '../../../../shared/interfaces';

@Component({
  selector: 'app-portfolio-list-item',
  imports: [SharedModule],
  templateUrl: './portfolio-list-item.component.html',
  styleUrl: './portfolio-list-item.component.scss'
})
export class PortfolioListItemComponent {
  @Input() item?: PortfolioItem;

  constructor() {
    console.log(this.item);
  }
}
