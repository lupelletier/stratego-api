import { ColorTeam } from "../enums/color-team.enum";

export class CreateGameDto {
    player: string;
    color_team: ColorTeam;
}
