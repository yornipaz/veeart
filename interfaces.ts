export interface Breakpoint{
    position:number;
    move:Move;


} 
interface Move {
    steps:number;
    type:'avanza'|'desciende';
}
export interface User{
    name:string;
    position:number;
    final:boolean;
    
}
export interface HistoryGame{
    id:number;
    players:User[];
}


