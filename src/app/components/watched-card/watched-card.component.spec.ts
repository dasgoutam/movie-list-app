import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedCardComponent } from './watched-card.component';

describe('WatchedCardComponent', () => {
  let component: WatchedCardComponent;
  let fixture: ComponentFixture<WatchedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
