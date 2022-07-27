import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingConsoleComponent } from './gamingConsole.component';

describe('ConsoleComponent', () => {
  let component: GamingConsoleComponent;
  let fixture: ComponentFixture<GamingConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
