let { Board, Servo } = require("johnny-five");
let board = new Board();

board.on("ready", () => {
  let x = new Servo(9)
  let y = new Servo(10)
  x.center()
  y.center()
});