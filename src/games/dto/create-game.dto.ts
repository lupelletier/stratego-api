import { IsDefined, IsEnum, IsNotEmpty, MaxLength } from "class-validator";
import { ColorTeam } from "../enums/color-team.enum";

export class CreateGameDto {

    @IsNotEmpty()
    @MaxLength(100)
    player: string;

    @IsDefined()
    @IsEnum(ColorTeam)
    color_team: ColorTeam;
}
