import { IsDefined, IsEnum, IsNotEmpty, MaxLength } from "class-validator";
import { ColorTeam } from "../enums/color-team.enum";
import { Status } from "../enums/status.enum";

export class CreateGameDto {

    @IsNotEmpty()
    @MaxLength(100)
    name_player_red: string;

    @IsNotEmpty()
    @MaxLength(100)
    name_player_blue: string;

    @IsDefined()
    @IsEnum(ColorTeam)
    active_player: ColorTeam;

    @IsDefined()
    @IsEnum(Status)
    status: Status;

    @IsNotEmpty()
    blue_setup: string;

    @IsNotEmpty()
    red_setup: string;

    @IsNotEmpty()
    current_board: string;
}
