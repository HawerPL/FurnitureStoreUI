import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSettingsComponent } from './admin-edit-settings.component';

describe('AdminEditSettingsComponent', () => {
  let component: AdminEditSettingsComponent;
  let fixture: ComponentFixture<AdminEditSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
