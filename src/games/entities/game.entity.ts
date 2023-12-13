import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ColorTeam } from "../enums/color-team.enum";

@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    player: string;

    @Column({ type: 'enum', enum: ColorTeam })
    color_team: ColorTeam;
}
