export enum Color{
    White,
    Black
}

export type Coordinates = {
    x: number;
    y: number;
}

export enum FENChar {
    WhitePawn = "P",
    WhiteBishop = "B",
    WhiteKnight = "N",
    WhiteQueen = "Q",
    WhiteKing = "K",
    WhiteRook = "R",
    BlackPawn = "p",
    BlackBishop = "b",
    BlackKnight = "n",
    BlackQueen = "q",
    BlackKing = "k",
    BlackRook = "r"

}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
    [FENChar.WhitePawn]: "assets/pieces/white pawn.svg",
    [FENChar.WhiteBishop]: "assets/pieces/white bishop.svg",
    [FENChar.WhiteKnight]: "assets/pieces/white knight.svg",
    [FENChar.WhiteQueen]: "assets/pieces/white queen.svg",
    [FENChar.WhiteKing]: "assets/pieces/white king.svg",
    [FENChar.WhiteRook]: "assets/pieces/white rook.svg",
    [FENChar.BlackPawn]: "assets/pieces/black pawn.svg",
    [FENChar.BlackBishop]: "assets/pieces/black bishop.svg",
    [FENChar.BlackKnight]: "assets/pieces/black knight.svg",
    [FENChar.BlackQueen]: "assets/pieces/black queen.svg",
    [FENChar.BlackKing]: "assets/pieces/black king.svg",
    [FENChar.BlackRook]: "assets/pieces/black rook.svg"
}