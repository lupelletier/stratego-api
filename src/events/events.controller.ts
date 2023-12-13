import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventDto } from './dto/event.dto';
import { Socket } from 'dgram';


@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() dto: EventDto) {
    return this.eventsService.create(dto);
  }

  @Get('/all/:after')
  findAll(@Param('after') after: number) {
    if (after === undefined) {
      return this.eventsService.findAll();
    }
    return this.eventsService.findAllAfter(after);
  }

  @Get('event/:id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: EventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
