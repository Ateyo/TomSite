import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PortfolioItem } from '../../../../shared/interfaces';
import { PortfolioService } from '../../../../shared/services/portfolio/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SKILL_LINKS } from '../../../../shared/dictionnary/skills-links';

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

    if (!this.item) {
      throw new Error('Item not found');
    } else {
      this.sanitizedIframeUrl = this.item.iframe
        ? this._sanitizer.bypassSecurityTrustResourceUrl(this.item.iframe)
        : null;
    }
  }

  getSkillUrl(skill: string): string | undefined {
    return SKILL_LINKS[skill];
  }
}
