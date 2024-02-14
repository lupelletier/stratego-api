import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppGateway } from 'src/app.gateway';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private data: Repository<Game>,
    private gateway: AppGateway,
  ) {}

  async create(dto: CreateGameDto): Promise<Game> {
    try {
      return await this.data.save(dto);
    } catch (e) {
      throw new ConflictException();
    }
  }

  findAll(): Promise<Game[]> {
    return this.data.find();
  }

  async findOne(id: number): Promise<Game> {
    const found = await this.data.findOneBy({ id });
    if (!found) throw new NotFoundException();
    return found;
  }

  async update(id: number, dto: UpdateGameDto): Promise<Game> {
    try {
      let done = await this.data.update(id, dto);
      if (done.affected != 1) throw new NotFoundException();
      if (dto.active_player) this.gateway.updateGame(dto);
    } catch (e) {
      throw e instanceof NotFoundException ? e : new ConflictException();
    }
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    let done = await this.data.delete(id);
    if (done.affected != 1) throw new NotFoundException();
  }
}
