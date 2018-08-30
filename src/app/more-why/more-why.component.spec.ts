import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreWhyComponent } from './more-why.component';

describe('MoreWhyComponent', () => {
  let component: MoreWhyComponent;
  let fixture: ComponentFixture<MoreWhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreWhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
