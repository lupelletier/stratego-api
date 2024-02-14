import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppGateway } from 'src/app.gateway';
import { Game } from './entities/game.entity';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Game]),
  ],
  controllers: [GamesController],
  providers: [GamesService, AppGateway],
})
export class GamesModule { }
