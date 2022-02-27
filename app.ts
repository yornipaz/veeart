import {initGame} from './ladder-game'
import{calculatedSquares,generatedPlayers,getRandomNumber}from './helper'
import {Breakpoints} from './data'
import { User } from './interfaces';
const minGames:number=3;
const maxGames:number=5;
const minPlayers:number=1;
const maxPlayers:number=5;
const countSquares:number= calculatedSquares(40,30);
const randomCountPlayers=getRandomNumber(maxPlayers,minPlayers);
const UserPlayers:User[]=generatedPlayers(randomCountPlayers)

initGame(countSquares,minGames,maxGames,Breakpoints,UserPlayers);


