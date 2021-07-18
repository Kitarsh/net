import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatorokuDetailComponent } from './chatoroku-detail.component';

describe('ChatorokuDetailComponent', () => {
  let component: ChatorokuDetailComponent;
  let fixture: ComponentFixture<ChatorokuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatorokuDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatorokuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
