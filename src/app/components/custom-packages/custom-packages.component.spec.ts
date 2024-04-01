import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPackagesComponent } from './custom-packages.component';

describe('CustomPackagesComponent', () => {
  let component: CustomPackagesComponent;
  let fixture: ComponentFixture<CustomPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomPackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
