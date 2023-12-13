import { Controller, Get } from '@nestjs/common';
import { CreateHintsDto } from './dto/hints.dto';

@Controller('hints')
export class HintsController {
    private static readonly piecesNames: string[] = [
        'M', 'G', 'C', 'C', 'M', 'M', 'M', 'C', 'C', 'C', 'C', 'L', 'L', 'L', 'L', 'S', 'S', 'S', 'S', 'M', 'M', 'M', 'M', 'M', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'B', 'B', 'B', 'B', 'B', 'B', 'F'
    ];

    @Get()
    generateBoard(): CreateHintsDto[][] {
        // Crée un tableau bidimensionnel pour représenter le plateau de jeu
        const board: CreateHintsDto[][] = [];

        // Fonction de permutation Fisher-Yates pour mélanger les piècesNames
        const shuffleArray = (array: any[]) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        };

        // Mélange les piècesNames pour les répartir aléatoirement sur le plateau
        shuffleArray(HintsController.piecesNames);

        // Index utilisé pour suivre la position actuelle dans piecesNames
        let index = 0;

        // Boucle pour remplir le tableau bidimensionnel avec les pièces
        for (let i = 0; i < 4; i++) {
            board[i] = [];
            for (let j = 0; j < 10; j++) {
                let pieceDto: CreateHintsDto;

                if (HintsController.piecesNames[index] === 'F') {
                    // Place le drapeau sur la dernière ligne
                    pieceDto = { row: 3, col: j, piece: 'F' };
                    // Place des bombes autour du drapeau
                    if (board[2]) board[2][j - 1] = { row: 2, col: j - 1, piece: 'B' };
                    if (board[2]) board[2][j + 1] = { row: 2, col: j + 1, piece: 'B' };
                    if (board[3]) board[3][j - 1] = { row: 3, col: j - 1, piece: 'B' };
                    if (board[3]) board[3][j + 1] = { row: 3, col: j + 1, piece: 'B' };
                } else {
                    // Crée un objet CreateHintsDto pour représenter une pièce
                    pieceDto = { row: i, col: j, piece: HintsController.piecesNames[index] };
                }

                // Assignation de la pièce à la position actuelle dans le tableau
                if (board[i]) board[i][j] = pieceDto;

                // Incrémente l'index, en bouclant si nécessaire
                index = (index + 1) % HintsController.piecesNames.length;
            }
        } 

        // Affiche la longueur du tableau piecesNames dans la console
        console.log(HintsController.piecesNames.length);

        // Renvoie le tableau bidimensionnel représentant le plateau de jeu
        return board;
    }
}
