import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpaceComponent } from './admin-space.component';

describe('AdminSpaceComponent', () => {
  let component: AdminSpaceComponent;
  let fixture: ComponentFixture<AdminSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
