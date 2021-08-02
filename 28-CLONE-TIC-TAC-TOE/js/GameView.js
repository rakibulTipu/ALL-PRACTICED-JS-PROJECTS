export default class GameView {
  constructor() {
    console.log("init game now view");
  }

  updateBoard() {
    console.log("this is a new board");
    console.log(game.board);
    for (let i = 0; game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index="${i}"]`);
      console.log(tile);
    }
  }
}
