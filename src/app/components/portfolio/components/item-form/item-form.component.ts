import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { PortfolioItem } from '../../../../shared/interfaces';
import { PortfolioService } from '../../../../shared/services/portfolio/portfolio.service';
import { SnackbarService } from '../../../../shared/services/snackbar/snackbar.service';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-item-form',
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  private _snackbar = inject(SnackbarService);
  private _fb = inject(FormBuilder);

  projectForm: FormGroup;

  constructor(private _portfolioService: PortfolioService) {
    this.projectForm = this._fb.group({
      title: ['', Validators.required],
      subtitle: [''],
      image: [''],
      images: [[]],
      description: [''],
      descriptionShort: [''],
      skills: ['', Validators.required],
      link: [''],
      iframe: ['']
    });
  }

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    if (this.projectForm.invalid) {
      this._snackbar.openComponent(
        {
          message: 'Veuillez remplir tous les champs obligatoires',
          class: 'snackbar-error'
        },
        3000
      );
      return;
    }

    const value = this.projectForm.value;
    const item: PortfolioItem = {
      ...value,
      id: this._portfolioService.getNextId().toString(),
      skills: value.skills.split(',').map((skill: string) => skill.trim())
    };

    await this._portfolioService.addItem(item);
    this._snackbar.openComponent(
      { message: 'Projet ajouté', class: 'snackbar-success' },
      3000
    );
    this.projectForm.reset();
  }
}
