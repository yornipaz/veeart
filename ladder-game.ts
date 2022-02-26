import { User, HistoryGame, Breakpoint } from "./interfaces";
import {getRandomNumber}from './helper'
export function initGame(
  countSquares: number,
  minGames: number,
  maxGames: number,
  breakpoints: Breakpoint[],
  Users: User[]
) {
  let positionGame: number = 0;

  let initGame = true;
  let historyGames: HistoryGame[] = [];
  let usersGame: User[] = [];
  let positionsUsersGame: number[] = [];
  let winners: User[] = [];

  let round: number = 0;
  const games: number = getRandomNumber(maxGames, minGames);
  for (let index = 1; index <= games; index++) {
    console.log("Juego Numero ", index);

    while (positionGame <= countSquares) {
      round = round + 1;
      console.log("Round  Number : ", round);

      usersGame = Users.map((user) => {
        let dado = getRandomNumber(6, 1);

        console.log(`Dado  del jugador ${user.name} arroja `, dado);
        user.position = getPositionUser(
          dado,
          initGame,
          user.name,
          countSquares,
          user.position,
          breakpoints
        );
        user.final = user.position >= countSquares ? true : false;

        return {
          name: user.name,
          position: user.position,
          final: user.final,
        };
      }).sort();

      positionsUsersGame = usersGame.map((user) => user.position);
      positionGame = Math.max(...positionsUsersGame);

      initGame = false;
    }
    if (positionGame > countSquares) {
      console.log("Juego Terminado Numero ", index);
      winners = usersGame.filter(
        (user) =>
          user.position === Math.max(...Users.map((user) => user.position))
      );
      console.log("Winners Game ", winners);
    }
    historyGames.push({ id: index, players: usersGame });
    round = 0;
    positionGame = 0;
    winners = [];
    usersGame = [];

    positionsUsersGame = [];
  }
  historyGames.forEach((historyGame) => {
    console.log("Juego Numero # ", historyGame.id);
    historyGame.players.forEach((player) => console.table(player));
  });
}

function getPositionUser(
  dado: number,
  initGame: boolean,
  name: string,
  countSquares: number,
  position: number,
  breakpoints: Breakpoint[]
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


