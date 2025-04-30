import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'apropos',
    title: 'A Propos',
    loadComponent: () =>
      import('./components/apropos/apropos.component').then(
        (m) => m.AProposComponent
      )
  },
  {
    path: 'cv',
    title: 'CV',
    loadComponent: () =>
      import('./components/cv/cv.component').then((m) => m.CvComponent)
  },
  {
    path: 'portfolio',
    title: 'Portfolio',
    loadComponent: () =>
      import('./components/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      )
  },
  {
    path: 'portfolio/items/:id',
    title: 'Portfolio Item',
    loadComponent: () =>
      import(
        './components/portfolio/components/item/portfolio-item.component'
      ).then((m) => m.PortfolioItemComponent)
  },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent
      )
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
    loadComponent: () =>
      import('./components/apropos/apropos.component').then(
        (m) => m.AProposComponent
      )
  }
];
