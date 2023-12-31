import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutViewComponent } from './workout-view.component';

describe('WorkoutViewComponent', () => {
  let component: WorkoutViewComponent;
  let fixture: ComponentFixture<WorkoutViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutViewComponent]
    });
    fixture = TestBed.createComponent(WorkoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
