import { Controller, Get } from '@nestjs/common';
import { CreateHintsDto } from './dto/hints.dto';
import { HintsService } from './hints.service';

@Controller('hints')
export class HintsController {
  constructor(private readonly hintsService: HintsService) {}

  @Get()
  generateBoard(): CreateHintsDto[][] {
    return this.hintsService.generateBoard();
  }
}
