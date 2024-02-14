import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventsGateway } from 'src/events/events.gateway';

@Module({
  controllers: [EventsController],
  providers: [EventsService, EventsGateway],
})
export class EventsModule {}
