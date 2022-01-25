import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponentGeneratedByConsoleComponent } from './course-component-generated-by-console.component';

describe('CourseComponentGeneratedByConsoleComponent', () => {
  let component: CourseComponentGeneratedByConsoleComponent;
  let fixture: ComponentFixture<CourseComponentGeneratedByConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponentGeneratedByConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponentGeneratedByConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
