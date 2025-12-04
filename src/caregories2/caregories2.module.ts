import { Module } from '@nestjs/common';
import { Caregories2Service } from './caregories2.service';
import { Caregories2Controller } from './caregories2.controller';

@Module({
  controllers: [Caregories2Controller],
  providers: [Caregories2Service],
})
export class Caregories2Module {}
