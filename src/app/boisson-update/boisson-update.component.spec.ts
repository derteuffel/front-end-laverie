import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonUpdateComponent } from './boisson-update.component';

describe('BoissonUpdateComponent', () => {
  let component: BoissonUpdateComponent;
  let fixture: ComponentFixture<BoissonUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoissonUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoissonUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
