import { Module } from '@nestjs/common';
import { HintsController } from './hints.controller';

@Module({
  controllers: [HintsController]
})
export class HintsModule {}
