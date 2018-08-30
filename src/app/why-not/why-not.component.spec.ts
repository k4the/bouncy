import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNotComponent } from './why-not.component';

describe('WhyNotComponent', () => {
  let component: WhyNotComponent;
  let fixture: ComponentFixture<WhyNotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyNotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
