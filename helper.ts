import { User } from "./interfaces";

export function generatedPlayers(countPlayers: number):User[]{
    let players:User[]=[];
    for (let index = 0; index < countPlayers; index++) {
        players.push({
            name:`Player ${index+1} `,
            final:false,
            position:0

        })
        
    }
    return players;
}
export function calculatedSquares(alto:number,ancho:number):number{
    return alto*ancho/2;
}
export function getRandomNumber(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }