import { Component } from '@angular/core';
import { ChessBoard } from '../../chess-logic/chess-board';
import { Color, FENChar, pieceImagePaths } from '../../chess-logic/models';
import { NgClass, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css'
})
export class ChessBoardComponent {
  public pieceImagePaths = pieceImagePaths;

  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color{return this.chessBoard.playerColor}

  public isSquareBlack(x: number, y: number): boolean{
    return ChessBoard.isSquareBlack(x, y);
  }
}
