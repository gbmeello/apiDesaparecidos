import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaparecidoComponent } from './desaparecido-list.component';

describe('DesaparecidoComponent', () => {
  let component: DesaparecidoComponent;
  let fixture: ComponentFixture<DesaparecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesaparecidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesaparecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
