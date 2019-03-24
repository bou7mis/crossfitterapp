import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabataComponent } from './tabata.component';

describe('TabataComponent', () => {
  let component: TabataComponent;
  let fixture: ComponentFixture<TabataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
