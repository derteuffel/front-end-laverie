import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureBoissonListComponent } from './facture-boisson-list.component';

describe('FactureBoissonListComponent', () => {
  let component: FactureBoissonListComponent;
  let fixture: ComponentFixture<FactureBoissonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureBoissonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureBoissonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
