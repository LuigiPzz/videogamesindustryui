import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduttoreComponent } from './produttore.component';

describe('ProduttoreComponent', () => {
  let component: ProduttoreComponent;
  let fixture: ComponentFixture<ProduttoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduttoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduttoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
