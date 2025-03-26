import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDirComponentComponent } from './directive-dir-component.component';

describe('DirectiveDirComponentComponent', () => {
  let component: DirectiveDirComponentComponent;
  let fixture: ComponentFixture<DirectiveDirComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveDirComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveDirComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
