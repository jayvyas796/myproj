import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeSampleComponent } from './pipe-sample.component';

describe('PipeSampleComponent', () => {
  let component: PipeSampleComponent;
  let fixture: ComponentFixture<PipeSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeSampleComponent]
    });
    fixture = TestBed.createComponent(PipeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
