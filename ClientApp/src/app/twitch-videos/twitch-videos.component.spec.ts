import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchVideosComponent } from './twitch-videos.component';

describe('TwitchVideosComponent', () => {
  let component: TwitchVideosComponent;
  let fixture: ComponentFixture<TwitchVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
