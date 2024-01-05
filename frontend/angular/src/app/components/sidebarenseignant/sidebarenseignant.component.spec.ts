import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarenseignantComponent } from './sidebarenseignant.component';

describe('SidebarenseignantComponent', () => {
  let component: SidebarenseignantComponent;
  let fixture: ComponentFixture<SidebarenseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarenseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
