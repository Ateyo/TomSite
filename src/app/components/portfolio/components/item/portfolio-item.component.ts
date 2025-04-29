import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PortfolioItem } from '../../../../shared/interfaces';
import { PortfolioService } from '../../../../shared/services/portfolio/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-portfolio-item',
  imports: [SharedModule],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss'
})
export class PortfolioItemComponent {
  item: PortfolioItem;
  sanitizedIframeUrl: any;

  constructor(
    private _portfolioService: PortfolioService,
    private _route: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {
    const id = this._route.snapshot.paramMap.get('id')!;

    this.item = this._portfolioService.getItemById(id)!;

    this.sanitizedIframeUrl = this.item.iframe
      ? this._sanitizer.bypassSecurityTrustResourceUrl(this.item.iframe)
      : null;

    console.log(this.item);
  }
}
