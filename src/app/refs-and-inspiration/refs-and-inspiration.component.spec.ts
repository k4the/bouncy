import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefsAndInspirationComponent } from './refs-and-inspiration.component';

describe('RefsAndInspirationComponent', () => {
  let component: RefsAndInspirationComponent;
  let fixture: ComponentFixture<RefsAndInspirationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefsAndInspirationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefsAndInspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
