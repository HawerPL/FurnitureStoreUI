import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelEditCategoryComponent } from './admin-panel-edit-category.component';

describe('AdminPanelEditCategoryComponent', () => {
  let component: AdminPanelEditCategoryComponent;
  let fixture: ComponentFixture<AdminPanelEditCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelEditCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelEditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
