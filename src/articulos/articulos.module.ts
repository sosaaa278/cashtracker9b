import { Module } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { ArticulosController } from './articulos.controller';
import { ArticulosModule } from './articulos/articulos.module';

@Module({
  providers: [ArticulosService],
  controllers: [ArticulosController],
  imports: [ArticulosModule]
})
export class ArticulosModule {}
