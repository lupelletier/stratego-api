import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ColorTeam } from "../enums/color-team.enum";
import { Status } from "../enums/status.enum";

@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name_player_red: string;

    @Column({ length: 100 })
    name_player_blue: string;

    @Column({ type: 'enum', enum: ColorTeam })
    active_player: ColorTeam;

    @Column({ type: 'enum', enum: Status })
    status: Status;

    @Column()
    blue_setup: string;

    @Column()
    red_setup: string;

    @Column()
    current_board: string;
}
