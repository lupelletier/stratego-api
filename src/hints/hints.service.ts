import { Injectable } from '@nestjs/common';
import { CreateHintsDto } from './dto/hints.dto';
import { Piece } from './dto/pieces.dto';

@Injectable()
export class HintsService {
  private static readonly pieces: Piece[][] = [
    [
      //
      { name: 'Dem', points: 3 },
      { name: 'Dem', points: 3 },
      { name: 'Boom', points: 0 },
      { name: 'Drap', points: 0 },
      { name: 'Boom', points: 0 },
      { name: 'Dem', points: 3 },
      { name: 'Ecl', points: 2 },
      { name: 'Boom', points: 0 },
      { name: 'Dem', points: 3 },
      { name: 'Ecl', points: 2 },
      //
      // 10
      //
      { name: 'Ser', points: 4 },
      { name: 'Cap', points: 6 },
      { name: 'Lieut', points: 5 },
      { name: 'Boom', points: 0 },
      { name: 'Lieut', points: 5 },
      { name: 'Col', points: 8 },
      { name: 'Com', points: 7 },
      { name: 'Ser', points: 4 },
      { name: 'Boom', points: 0 },
      { name: 'Ser', points: 4 },
      //
      // 20
      //
      { name: 'Ecl', points: 2 },
      { name: 'Col', points: 8 },
      { name: 'Com', points: 7 },
      { name: 'Com', points: 7 },
      { name: 'Ecl', points: 2 },
      { name: 'Gén', points: 9 },
      { name: 'Esp', points: 1 },
      { name: 'Boom', points: 0 },
      { name: 'Ser', points: 4 },
      { name: 'Lieut', points: 5 },
      //
      // 30
      //
      { name: 'Cap', points: 6 },
      { name: 'Ecl', points: 2 },
      { name: 'Mar', points: 10 },
      { name: 'Dem', points: 3 },
      { name: 'Cap', points: 6 },
      { name: 'Ecl', points: 2 },
      { name: 'Lieut', points: 5 },
      { name: 'Ecl', points: 2 },
      { name: 'Ecl', points: 2 },
      { name: 'Cap', points: 6 },
      //
    ],
    [
      { name: 'Cap', points: 6 },
      { name: 'Dem', points: 3 },
      { name: 'Ser', points: 4 },
      { name: 'Ecl', points: 2 },
      { name: 'Boom', points: 0 },
      { name: 'Lieut', points: 5 },
      { name: 'Com', points: 7 },
      { name: 'Gén', points: 9 },
      { name: 'Com', points: 7 },
      { name: 'Boom', points: 0 },

      { name: 'Ecl', points: 2 },
      { name: 'Ecl', points: 2 },
      { name: 'Ser', points: 4 },
      { name: 'Dem', points: 3 },
      { name: 'Dem', points: 3 },
      { name: 'Boom', points: 0 },
      { name: 'Ecl', points: 2 },
      { name: 'Col', points: 8 },
      { name: 'Esp', points: 1 },
      { name: 'Lieut', points: 5 },

      { name: 'Ecl', points: 2 },
      { name: 'Com', points: 7 },
      { name: 'Dem', points: 3 },
      { name: 'Cap', points: 6 },
      { name: 'Col', points: 8 },
      { name: 'Ser', points: 4 },
      { name: 'Com', points: 7 },
      { name: 'Boom', points: 0 },
      { name: 'Dem', points: 3 },
      { name: 'Drap', points: 0 },

      { name: 'Ser', points: 4 },
      { name: 'Mar', points: 10 },
      { name: 'Ecl', points: 2 },
      { name: 'Cap', points: 6 },
      { name: 'Dem', points: 3 },
      { name: 'Ecl', points: 2 },
      { name: 'Col', points: 8 },
      { name: 'Ecl', points: 2 },
      { name: 'Gén', points: 9 },
      { name: 'Boom', points: 0 },
    ],
    [
      { name: 'Ser', points: 4 },
      { name: 'Dem', points: 3 },
      { name: 'Ecl', points: 2 },
      { name: 'Cap', points: 6 },
      { name: 'Com', points: 7 },
      { name: 'Com', points: 7 },
      { name: 'Lieut', points: 5 },
      { name: 'Cap', points: 6 },
      { name: 'Ser', points: 4 },
      { name: 'Drap', points: 0 },

      { name: 'Ecl', points: 2 },
      { name: 'Boom', points: 0 },
      { name: 'Lieut', points: 5 },
      { name: 'Col', points: 8 },
      { name: 'Ser', points: 4 },
      { name: 'Dem', points: 3 },
      { name: 'Com', points: 7 },
      { name: 'Ecl', points: 2 },
      { name: 'Dem', points: 3 },
      { name: 'Gén', points: 9 },

      { name: 'Ecl', points: 2 },
      { name: 'Ecl', points: 2 },
      { name: 'Ecl', points: 2 },
      { name: 'Boom', points: 0 },
      { name: 'Cap', points: 6 },
      { name: 'Ecl', points: 2 },
      { name: 'Dem', points: 3 },
      { name: 'Dem', points: 3 },
      { name: 'Boom', points: 0 },
      { name: 'Col', points: 8 },

      { name: 'Com', points: 7 },
      { name: 'Mar', points: 10 },
      { name: 'Dem', points: 3 },
      { name: 'Ecl', points: 2 },
      { name: 'Boom', points: 0 },
      { name: 'Cap', points: 6 },
      { name: 'Esp', points: 1 },
      { name: 'Ecl', points: 2 },
      { name: 'Ser', points: 4 },
      { name: 'Dem', points: 3 },
    ],
  ];

  generateBoard(): CreateHintsDto[][] {
    // Crée un tableau bidimensionnel pour représenter le plateau de jeu
    const board: CreateHintsDto[][] = [];

    // Index utilisé pour suivre la position actuelle dans piecesNames
    let index = 0;

    let indexBoard = 0;
    indexBoard = Math.round(Math.random() * 2);
    console.log(indexBoard);

    let selectedTable;

    switch (indexBoard) {
      case 0:
        selectedTable = HintsService.pieces[0];
        break;
      case 1:
        HintsService.pieces[1];
        selectedTable = HintsService.pieces[1];
        break;
      case 2:
        HintsService.pieces[2];
        selectedTable = HintsService.pieces[2];
        break;
      default:
        console.log(`Sorry`);
    }
    // Boucle pour remplir le tableau bidimensionnel avec les pièces
    for (let row = 0; row < 4; row++) {
      board[row] = [];
      for (let col = 0; col < 10; col++) {
        const pieceDto: CreateHintsDto = {
          row: row,
          col: col,
          piece: selectedTable[index],
        };
        // Assignation de la pièce à la position actuelle dans le tableau
        board[row][col] = pieceDto;
        // Incrémente l'index, en bouclant si nécessaire
        index = (index + 1) % selectedTable.length;
      }
    }

    // Renvoie le tableau bidimensionnel représentant le plateau de jeu
    return board;
  }
}
