import { breakpoints, Users } from "./data";
import { User, HistoryGame } from "./interfaces";

initGame();
function initGame() {
  const countSquares: number = 25;
  let positionGame: number = 0;

  let initGame = true;
  let historyGames: HistoryGame[] = [];
  let usersGame: User[] = [];

  let round: number = 0;
  const games: number = getRandomNumber(3, 1);
  for (let index = 1; index <= games; index++) {
    console.log("Juego Numero ", index);

    while (positionGame <= countSquares) {
      round = round + 1;
      console.log("Round  Number : ", round);

      usersGame = Users.map((user) => {
        let dado = getRandomNumber(6, 1);

        console.log(`Dado  del jugador ${user.name} arroja `, dado);
         const positionUser = getPositionUser(
          dado,
          initGame,
          user.name,
          countSquares,
          user.position
        );
        console.log('Posicion que me llega : ', positionUser)
        return {
          name: user.name,
          position: positionUser,
          final: user.final,
        };
      });

      const positionsUsersGame: number[] = usersGame.map(
        (user) => user.position
      );
      positionGame = Math.max(...positionsUsersGame) ;
      console.log("Maxima Posicion ", positionGame, "round ", round);
      initGame = false;
    }
    if (positionGame > countSquares) {
      console.log("Juego Terminado Numero ", index);
      const winners: User[] = usersGame.filter((user) => user.position === Math.max(...Users.map(user=>user.position)));
      console.log("Winners Game ",usersGame);
      historyGames.push({ id: index, players: winners });
    }
    round = 0;
  }
}

function getPositionUser(
  dado: number,
  initGame: boolean,
  name: string,
  countSquares: number,
  position:number
) {
  let nextPositionMove: number = 0;

 

  nextPositionMove = initGame ? dado : position + dado;

  let moveBreakpoint = breakpoints.filter(
    (breakpoint) => breakpoint.position === nextPositionMove
  );

  position =
    moveBreakpoint.length > 0
      ? moveBreakpoint[0].move.steps + nextPositionMove
      : nextPositionMove;
  let message =
    moveBreakpoint.length > 0 && position < countSquares
      ? `Jugador ${name} ${moveBreakpoint[0].move.type} a cuadro ${position}`
      : `Jugador ${name} avanza al cuadro ${
          position <= countSquares ? position : countSquares
        }`;
  console.log(message);
  return position;
}

function getRandomNumber(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
