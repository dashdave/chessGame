const gameBoard = document.getElementById('gameBoard');
const gameState = [
  ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
  ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
  ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
];

const pieces = {
  "pawn": "P",
  "bishop": "B",
  "queen": "Q",
  "rook": "R",
  "king": "K",
  "knight": "N"
};

for (let file = 0; file < 8; file++) {
  for (let rank = 0; rank < 8; rank++) {
    const isLightSquare = (file + rank) % 2 !== 0;
    const squareColor = isLightSquare ? "#cecd8f" : "brown";
    const pieceType = gameState[file][rank];
    const pieceColor = (file < 2 ? "b" : "w");

    const square = document.createElement('div');
    square.style.width = "8px";
    square.style.height = "8px";
    square.style.padding = "2em";
    square.style.backgroundColor = squareColor;
    square.style.display = "flex";
    square.style.alignItems = "center";
    square.style.justifyContent = "center";

    square.dataset.file = file;
    square.dataset.rank = rank;

    if (pieceType) {
      const piece = document.createElement("img");
      piece.src = `pieces/${pieceColor}${pieces[pieceType]}.svg`;
      square.appendChild(piece);
    }

    gameBoard.appendChild(square);
  }
}
