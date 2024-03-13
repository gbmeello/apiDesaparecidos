import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaparecidoDetailsComponent } from './desaparecido-details.component';

describe('DesaparecidoDetailsComponent', () => {
  let component: DesaparecidoDetailsComponent;
  let fixture: ComponentFixture<DesaparecidoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesaparecidoDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesaparecidoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
