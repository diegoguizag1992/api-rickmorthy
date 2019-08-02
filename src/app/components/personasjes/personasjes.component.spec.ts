import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasjesComponent } from './personasjes.component';

describe('PersonasjesComponent', () => {
  let component: PersonasjesComponent;
  let fixture: ComponentFixture<PersonasjesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasjesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
