import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestauComponent } from './list-restau.component';

describe('ListRestauComponent', () => {
  let component: ListRestauComponent;
  let fixture: ComponentFixture<ListRestauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRestauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
