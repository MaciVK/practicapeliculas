import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepeliculasComponent } from './homepeliculas.component';

describe('HomepeliculasComponent', () => {
  let component: HomepeliculasComponent;
  let fixture: ComponentFixture<HomepeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
