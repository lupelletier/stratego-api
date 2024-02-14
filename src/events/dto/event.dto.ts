import { EventTypes } from "../enums/event-types.enum";
import { IsNumber, IsEnum, IsDate } from "class-validator";

export class EventDto {

    id?: number;

    @IsEnum(EventTypes)
    type: EventTypes;

    @IsNumber()
    game_id: number;

    date?: Date;
}