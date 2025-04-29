import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioListItemComponent } from './portfolio-list-item.component';

describe('PortfolioListItemComponent', () => {
  let component: PortfolioListItemComponent;
  let fixture: ComponentFixture<PortfolioListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
