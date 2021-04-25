import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeasersGridComponent } from './teasers-grid.component';

describe('TeasersGridComponent', () => {
  let component: TeasersGridComponent;
  let fixture: ComponentFixture<TeasersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeasersGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeasersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
