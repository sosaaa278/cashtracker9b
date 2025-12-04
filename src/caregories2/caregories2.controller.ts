import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Caregories2Service } from './caregories2.service';
import { CreateCaregories2Dto } from './dto/create-caregories2.dto';
import { UpdateCaregories2Dto } from './dto/update-caregories2.dto';

@Controller('caregories2')
export class Caregories2Controller {
  constructor(private readonly caregories2Service: Caregories2Service) {}

  @Post()
  create(@Body() createCaregories2Dto: CreateCaregories2Dto) {
    return this.caregories2Service.create(createCaregories2Dto);
  }

  @Get()
  findAll() {
    return this.caregories2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caregories2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaregories2Dto: UpdateCaregories2Dto) {
    return this.caregories2Service.update(+id, updateCaregories2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caregories2Service.remove(+id);
  }
}
