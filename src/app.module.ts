import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Caregories2Module } from './caregories2/caregories2.module';
import { ArticulosModule } from './articulos/articulos.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [Caregories2Module, ArticulosModule],
})
export class AppModule { }
