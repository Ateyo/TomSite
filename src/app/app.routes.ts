import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'A Propos',
    loadComponent: () =>
      import('./components/apropos/apropos.component').then(
        (m) => m.AProposComponent
      )
  },
  {
    path: 'cv',
    title: 'Mon CV',
    loadComponent: () =>
      import('./components/cv/cv.component').then((m) => m.CvComponent)
  },
  {
    path: 'portfolio',
    title: 'Portfolio - Liste des projets',
    loadComponent: () =>
      import('./components/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      )
  },
  {
    path: 'portfolio/project/:id',
    title: 'Projet - Détails',
    loadComponent: () =>
      import(
        './components/portfolio/components/item/portfolio-item.component'
      ).then((m) => m.PortfolioItemComponent)
  },
  {
    path: 'portfolio/form',
    title: 'Ajouter au Portfolio',
    loadComponent: () =>
      import(
        './components/portfolio/components/item-form/item-form.component'
      ).then((m) => m.ItemFormComponent)
  },
  {
    path: 'mentions-legales',
    title: 'Mentions Légales',
    loadComponent: () =>
      import('./components/legal-mentions/legal-mentions.component').then(
        (m) => m.LegalMentionsComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
