import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutUpdateComponent } from './ajout-update.component';

describe('AjoutUpdateComponent', () => {
  let component: AjoutUpdateComponent;
  let fixture: ComponentFixture<AjoutUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
