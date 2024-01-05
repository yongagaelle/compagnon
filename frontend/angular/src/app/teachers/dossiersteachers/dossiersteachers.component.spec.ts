import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersteachersComponent } from './dossiersteachers.component';

describe('DossiersteachersComponent', () => {
  let component: DossiersteachersComponent;
  let fixture: ComponentFixture<DossiersteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossiersteachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossiersteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
