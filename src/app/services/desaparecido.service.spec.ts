import { TestBed } from '@angular/core/testing';

import { DesaparecidoService } from './desaparecido.service';

describe('DesaparecidoService', () => {
  let service: DesaparecidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesaparecidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
