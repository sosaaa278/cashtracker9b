import { Injectable } from '@nestjs/common';
import { CreateCaregories2Dto } from './dto/create-caregories2.dto';
import { UpdateCaregories2Dto } from './dto/update-caregories2.dto';

@Injectable()
export class Caregories2Service {
  create(createCaregories2Dto: CreateCaregories2Dto) {
    return 'This action adds a new caregories2';
  }

  findAll() {
    return `This action returns all caregories2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caregories2`;
  }

  update(id: number, updateCaregories2Dto: UpdateCaregories2Dto) {
    return `This action updates a #${id} caregories2`;
  }

  remove(id: number) {
    return `This action removes a #${id} caregories2`;
  }
}
