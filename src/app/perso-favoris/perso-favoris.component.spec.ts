import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoFavorisComponent } from './perso-favoris.component';

describe('PersoFavorisComponent', () => {
  let component: PersoFavorisComponent;
  let fixture: ComponentFixture<PersoFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoFavorisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
