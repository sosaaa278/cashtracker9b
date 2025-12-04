import { Test, TestingModule } from '@nestjs/testing';
import { Caregories2Service } from './caregories2.service';

describe('Caregories2Service', () => {
  let service: Caregories2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Caregories2Service],
    }).compile();

    service = module.get<Caregories2Service>(Caregories2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
