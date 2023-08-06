import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStandComponent } from './new-stand.component';

describe('NewStandComponent', () => {
  let component: NewStandComponent;
  let fixture: ComponentFixture<NewStandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewStandComponent]
    });
    fixture = TestBed.createComponent(NewStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
