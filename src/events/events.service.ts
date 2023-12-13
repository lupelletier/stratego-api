import { Injectable } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { EventsGateway } from './events.gateway';
import { EventTypes } from './enums/event-types.enum';

@Injectable()
export class EventsService {

  private events: EventDto[] = [];
  private lastEventId = 0;
  constructor(private gateway: EventsGateway) {}

  create(dto: EventDto): EventDto {
    dto.id = ++this.lastEventId;
    dto.date = new Date();
    this.events.push(dto);
    this.gateway.broadcast(dto);
    return dto;
  }

  findAll() {
    const dto = new EventDto();
    dto.id = 1;
    dto.type = EventTypes.OPEN;
    dto.game_id = 1;
    dto.date = new Date();
    this.gateway.broadcast(dto);
    return this.events;
  }

  findAllAfter(after: number) {
    return this.events.filter(event => event.id > after);
  }

  findOne(id: number) {
    return this.events[id]
  }

  update(id: number, updateEventDto: EventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
