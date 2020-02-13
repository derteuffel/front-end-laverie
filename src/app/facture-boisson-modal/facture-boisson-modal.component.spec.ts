import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureBoissonModalComponent } from './facture-boisson-modal.component';

describe('FactureBoissonModalComponent', () => {
  let component: FactureBoissonModalComponent;
  let fixture: ComponentFixture<FactureBoissonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureBoissonModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureBoissonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
