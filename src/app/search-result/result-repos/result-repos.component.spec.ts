import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultReposComponent } from './result-repos.component';

describe('ResultReposComponent', () => {
  let component: ResultReposComponent;
  let fixture: ComponentFixture<ResultReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
