import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SKILL_LINKS } from '../../../../shared/dictionnary/skills-links';
import { PortfolioItem } from '../../../../shared/interfaces';
import { PortfolioService } from '../../../../shared/services/portfolio/portfolio.service';
import { SharedModule } from '../../../../shared/shared.module';

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
    // Find the key in SKILL_LINKS that matches skill, case-insensitive
    const key = Object.keys(SKILL_LINKS).find(
      (k) => k.toLowerCase() === skill.toLowerCase()
    );
    return key ? SKILL_LINKS[key] : undefined;
  }

  isImageUrl(image?: string): boolean {
    if (!image) return false;
    // Checks if image starts with http:// or https://
    return /^https?:\/\//i.test(image);
  }

  getImageSrc(image?: string): string | undefined {
    if (!image) return undefined;
    return this.isImageUrl(image)
      ? image
      : `./img/portfolio/${image}`;
  }
}
