import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoissonComponent } from './search-boisson.component';

describe('SearchBoissonComponent', () => {
  let component: SearchBoissonComponent;
  let fixture: ComponentFixture<SearchBoissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
