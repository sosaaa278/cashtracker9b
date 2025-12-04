import { Test, TestingModule } from '@nestjs/testing';
import { Caregories2Controller } from './caregories2.controller';
import { Caregories2Service } from './caregories2.service';

describe('Caregories2Controller', () => {
  let controller: Caregories2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Caregories2Controller],
      providers: [Caregories2Service],
    }).compile();

    controller = module.get<Caregories2Controller>(Caregories2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
