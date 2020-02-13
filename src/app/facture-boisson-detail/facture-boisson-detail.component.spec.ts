import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureBoissonDetailComponent } from './facture-boisson-detail.component';

describe('FactureBoissonDetailComponent', () => {
  let component: FactureBoissonDetailComponent;
  let fixture: ComponentFixture<FactureBoissonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureBoissonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureBoissonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
