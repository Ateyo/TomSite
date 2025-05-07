import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PortfolioService } from '../../../../shared/services/portfolio/portfolio.service';
import { PortfolioItem } from '../../../../shared/interfaces/portfolio-item';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-item-form',
  imports: [SharedModule],
  templateUrl: './item-form.component.html', // Updated to use the external template
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  // item: PortfolioItem = {
  //   id: '',
  //   title: '',
  //   subtitle: '',
  //   image: '',
  //   images: [],
  //   description: '',
  //   descriptionShort: '',
  //   skills: [],
  //   link: '',
  //   iframe: ''
  // };
  item: PortfolioItem = {
    id: '',
    title: 'Nouveau projet',
    subtitle: 'yes',
    image: '',
    images: [],
    description: '',
    descriptionShort: 'Description courte',
    skills: ['linux', 'angular'],
    link: '',
    iframe: ''
  };
  skillsInput = '';

  constructor(
    private _portfolioService: PortfolioService,
    private _router: Router
  ) {
    this.item.id = this._portfolioService.getNextId().toString();
  }

  ngOnInit(): void {}

  updateSkills(): void {
    this.item.skills = this.skillsInput.split(',').map((skill) => skill.trim());
  }

  async onSubmit(): Promise<void> {
    this.updateSkills();
    await this._portfolioService.addItem(this.item);
    this._router.navigate(['/portfolio']); // Redirect to /portfolio
  }
}
