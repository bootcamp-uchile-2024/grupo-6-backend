import { Test, TestingModule } from '@nestjs/testing';
import { EquipoController } from './equipo.controller';
import { EquipoService } from './equipo.service';

describe('EquipoController', () => {
  let controller: EquipoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipoController],
      providers: [EquipoService],
    }).compile();

    controller = module.get<EquipoController>(EquipoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
