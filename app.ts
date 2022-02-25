import { breakpoints } from "./data";
const countSquares: number = 25;
let positionGame: number = 0;
let nextPositionMove: number = 0;
let countGames:number=0;
let initGame = true;

while (positionGame <= countSquares) {
  countGames++;
  console.log('Juego # ',countGames)
  let dado = getRandomNumber();
  console.log("Dado arroja ", dado);

  nextPositionMove = initGame ? dado : positionGame + dado;

  let moveBreakpoint = breakpoints.filter(
    (breakpoint) => breakpoint.position === nextPositionMove
  );

  positionGame =
    moveBreakpoint.length > 0
      ? moveBreakpoint[0].move.steps + nextPositionMove
      : nextPositionMove;

  let message =
    moveBreakpoint.length > 0 && positionGame < 25
      ? `Jugador ${moveBreakpoint[0].move.type} a cuadro ${positionGame}`
      : `Jugador avanza al cuadro ${positionGame <= 25 ? positionGame : 25}`;
  console.log(message);
  initGame = false;
}
if(positionGame>25){
    console.log('Fin del juego ')
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}
