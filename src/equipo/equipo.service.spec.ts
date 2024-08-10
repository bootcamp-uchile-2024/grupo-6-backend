import { Test, TestingModule } from '@nestjs/testing';
import { EquipoService } from './equipo.service';

describe('EquipoService', () => {
  let service: EquipoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipoService],
    }).compile();

    service = module.get<EquipoService>(EquipoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
