import { Component, inject, OnInit } from '@angular/core';
import { PortfolioItem } from '../../../../shared/interfaces';
import { PortfolioService } from '../../../../shared/services/portfolio/portfolio.service';
import { SnackbarService } from '../../../../shared/services/snackbar/snackbar.service';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-item-form',
  imports: [SharedModule],
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  private _snackbar = inject(SnackbarService);
  item: PortfolioItem = {
    id: '',
    title: '',
    subtitle: '',
    image: '',
    images: [],
    description: '',
    descriptionShort: '',
    skills: [],
    link: '',
    iframe: ''
  };
  // item: PortfolioItem = {
  //   id: '',
  //   title: 'tom-gonzalez.com',
  //   subtitle: 'Site vitrine',
  //   image: '',
  //   images: [],
  //   description: 'Site vitrine en Angular afin de prouver grave inspiré d'hyprland mais pour le bien',
  //   descriptionShort: 'Site vitrine en Angular afin de prouver grave',
  //   skills: ['linux', 'angular'],
  //   link: '',
  //   iframe: ''
  // };
  skillsInput = '';

  constructor(private _portfolioService: PortfolioService) {
    this.item.id = this._portfolioService.getNextId().toString();
  }

  ngOnInit(): void {}

  updateSkills(): void {
    this.item.skills = this.skillsInput.split(',').map((skill) => skill.trim());
  }

  async onSubmit(): Promise<void> {
    this.updateSkills();
    await this._portfolioService.addItem(this.item);
    this._snackbar.openComponent(
      { message: 'Projet ajouté', class: 'snackbar-success' },
      3000
    );
  }
}
