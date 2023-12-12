import { Controller, Get } from '@nestjs/common';
import { CreateHintsDto } from './dto/hints.dto';

@Controller()
export class HintsController {
    @Get('hints')
    generateBoard(): any[][] {
        const board: any[][] = [];
        const piecesNames = ['M', 'G', 'C', 'C', 'M', 'M', 'M', 'C', 'C', 'C', 'C', 'L', 'L', 'L', 'L', 'S', 'S', 'S', 'S', 'M', 'M', 'M', 'M', 'M', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'B', 'B', 'B', 'B', 'B', 'B', 'F'];

        // Fonction de permutation Fisher-Yates
        const shuffleArray = (array: any[]) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        };

        // Permuter le tableau pieceName
        shuffleArray(piecesNames);

        let index = 0; // Utilisé pour suivre la position actuelle dans pieceName

        for (let i = 0; i < 4; i++) {
            board[i] = [];
            for (let j = 0; j < 10; j++) {
                // Attribution de la lettre correspondante à la position actuelle dans le tableau pieceName
                board[i][j] = { row: i, col: j, piece: piecesNames[index] };

                // Incrémentation de l'index, en bouclant si nécessaire
                index = (index + 1) % piecesNames.length;
            }
        }
        console.log(piecesNames.length);
        
        return board;
    }
}
