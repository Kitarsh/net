import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatorokuComponent } from './chatoroku.component';

describe('ChatorokuComponent', () => {
  let component: ChatorokuComponent;
  let fixture: ComponentFixture<ChatorokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatorokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatorokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
