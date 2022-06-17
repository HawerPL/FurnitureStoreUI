import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelSectionEditorComponent } from './admin-panel-section-editor.component';

describe('AdminPanelSectionEditorComponent', () => {
  let component: AdminPanelSectionEditorComponent;
  let fixture: ComponentFixture<AdminPanelSectionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelSectionEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelSectionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
