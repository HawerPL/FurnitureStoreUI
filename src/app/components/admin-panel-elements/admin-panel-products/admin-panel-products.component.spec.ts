import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelProductsComponent } from './admin-panel-products.component';

describe('AdminPanelProductsComponent', () => {
  let component: AdminPanelProductsComponent;
  let fixture: ComponentFixture<AdminPanelProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
