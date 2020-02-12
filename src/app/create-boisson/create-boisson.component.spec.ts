import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoissonComponent } from './create-boisson.component';

describe('CreateBoissonComponent', () => {
  let component: CreateBoissonComponent;
  let fixture: ComponentFixture<CreateBoissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBoissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
