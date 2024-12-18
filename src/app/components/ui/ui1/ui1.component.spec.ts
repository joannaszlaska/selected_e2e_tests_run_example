import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ui1Component } from './ui1.component';

describe('Ui1Component', () => {
  let component: Ui1Component;
  let fixture: ComponentFixture<Ui1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ui1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ui1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
