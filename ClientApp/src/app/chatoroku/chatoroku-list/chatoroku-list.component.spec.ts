import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatorokuListComponent } from './chatoroku-list.component';

describe('ChatorokuComponent', () => {
  let component: ChatorokuListComponent;
  let fixture: ComponentFixture<ChatorokuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatorokuListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatorokuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
