export default class Game {
  constructor() {
    // console.log("js constructor");
    this.turn = "A";
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    if (this.turn == "A") {
      this.turn = "B";
    } else {
      this.turn = "A";
    }
  }

  makeMove(i) {
    this.board[i] = this.turn;
  }
}
