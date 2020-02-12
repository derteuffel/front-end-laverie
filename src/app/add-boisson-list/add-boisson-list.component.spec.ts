import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoissonListComponent } from './add-boisson-list.component';

describe('AddBoissonListComponent', () => {
  let component: AddBoissonListComponent;
  let fixture: ComponentFixture<AddBoissonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoissonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoissonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
