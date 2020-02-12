import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonDetailComponent } from './boisson-detail.component';

describe('BoissonDetailComponent', () => {
  let component: BoissonDetailComponent;
  let fixture: ComponentFixture<BoissonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoissonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoissonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
